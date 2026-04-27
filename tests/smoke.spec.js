const { test, expect } = require('@playwright/test');

const KEYS = {
  openai: 'sk-test-openai',
  claude: 'sk-ant-test-claude',
  gemini: 'AIza-test-gemini',
  perplexity: 'pplx-test-perplexity'
};

async function seedKeys(page) {
  await page.addInitScript(keys => {
    localStorage.setItem('aic3_keys', JSON.stringify(keys));
  }, KEYS);
}

async function createOpenAIChat(page) {
  await seedKeys(page);
  await page.goto('/index.html');
  await expect(page.locator('#headerVersion')).toContainText('v6.9.1-beta');
  await page.locator('#newChatBtn').click();
  await page.locator('#aiCardsContainer [data-toggle="1"]').click(); // OpenAI / ChatGPT
  await expect(page.locator('#createChatBtn')).toBeEnabled();
  await page.locator('#createChatBtn').click();
  await expect(page.locator('#chatHeaderTitle')).toContainText('Chat · ChatGPT');
}

test('app boots and opens the new-chat screen', async ({ page }) => {
  await seedKeys(page);
  await page.goto('/index.html');
  await expect(page).toHaveTitle(/AI Council/);
  await expect(page.locator('#headerVersion')).toContainText('v6.9.1-beta');
  await page.locator('#newChatBtn').click();
  await expect(page.locator('#screenNew')).toHaveClass(/active/);
  await expect(page.locator('#createChatBtn')).toBeDisabled();
});

test('OpenAI text request is mocked and rendered', async ({ page }) => {
  let requestBody;
  await page.route('https://api.openai.com/v1/responses', async route => {
    requestBody = route.request().postDataJSON();
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ output_text: 'Mock OpenAI відповідь OK' })
    });
  });

  await createOpenAIChat(page);
  await page.locator('#input').fill('Привіт, це тест');
  await page.locator('#sendBtn').click();
  await expect(page.locator('#messages')).toContainText('Mock OpenAI відповідь OK');
  expect(requestBody.model).toMatch(/^gpt-5/);
  expect(JSON.stringify(requestBody.input)).toContain('Привіт, це тест');
});

test('PDF attached to OpenAI is sent as Responses API input_file', async ({ page }) => {
  let requestBody;
  await page.route('https://api.openai.com/v1/responses', async route => {
    requestBody = route.request().postDataJSON();
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ output_text: 'PDF отримано як input_file' })
    });
  });

  await createOpenAIChat(page);
  await page.setInputFiles('#fileInput', {
    name: 'test.pdf',
    mimeType: 'application/pdf',
    buffer: Buffer.from('%PDF-1.4\n1 0 obj\n<<>>\nendobj\n%%EOF')
  });
  await expect(page.locator('.attach-chip')).toContainText('test.pdf');
  await page.locator('#input').fill('Проаналізуй PDF');
  await page.locator('#sendBtn').click();
  await expect(page.locator('#messages')).toContainText('PDF отримано як input_file');

  const serialized = JSON.stringify(requestBody.input);
  expect(serialized).toContain('input_file');
  expect(serialized).toContain('data:application/pdf;base64,');
});

test('SVG upload is rejected', async ({ page }) => {
  await createOpenAIChat(page);
  await page.setInputFiles('#fileInput', {
    name: 'bad.svg',
    mimeType: 'image/svg+xml',
    buffer: Buffer.from('<svg><script>alert(1)</script></svg>')
  });
  await expect(page.locator('.flash.err')).toContainText('тип файлу не дозволений');
  await expect(page.locator('.attach-chip')).toHaveCount(0);
});


test('attachment menu exposes camera, photos and files options', async ({ page }) => {
  await createOpenAIChat(page);
  await page.locator('#attachBtn').click();
  await expect(page.locator('#attachOptionsOverlay')).toHaveClass(/open/);
  await expect(page.locator('#attachCameraOption')).toBeVisible();
  await expect(page.locator('#attachMediaOption')).toBeVisible();
  await expect(page.locator('#attachFilesOption')).toBeVisible();
  await expect(page.locator('#fileInput')).toHaveAttribute('accept', '*/*');
});

test('API errors show human summary and clickable technical details', async ({ page }) => {
  await page.route('https://generativelanguage.googleapis.com/**', async route => {
    await route.fulfill({
      status: 429,
      contentType: 'application/json',
      body: JSON.stringify({
        error: {
          code: 429,
          status: 'RESOURCE_EXHAUSTED',
          message: 'You exceeded your current quota, please check your plan and billing details.'
        }
      })
    });
  });

  await seedKeys(page);
  await page.goto('/index.html');
  await page.locator('#newChatBtn').click();
  await page.locator('#aiCardsContainer [data-toggle="2"]').click(); // Gemini
  await page.locator('#createChatBtn').click();
  await page.locator('#input').fill('Тест помилки Gemini');
  await page.locator('#sendBtn').click();

  await expect(page.locator('.error-card')).toContainText('Gemini');
  await expect(page.locator('.error-card')).toContainText(/квоту|ліміт/i);
  await page.locator('.error-card').click();
  await expect(page.locator('#apiErrorOverlay')).toHaveClass(/open/);
  await expect(page.locator('#apiErrorOverlay')).toContainText('HTTP статус');
  await expect(page.locator('#apiErrorOverlay')).toContainText('RESOURCE_EXHAUSTED');
  await expect(page.locator('#apiErrorOverlay')).toContainText('429');
});
