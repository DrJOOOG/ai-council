const { test, expect } = require('@playwright/test');
const { version: APP_VERSION } = require('../package.json');

const EXPECTED_VERSION_LABEL = `v${APP_VERSION}`;

const KEYS = {
  openai: 'sk-test-openai',
  claude: 'sk-ant-test-claude',
  gemini: 'AIza-test-gemini',
  perplexity: 'pplx-test-perplexity'
};

async function seedKeys(page) {
  await page.addInitScript(keys => {
    localStorage.setItem('aic3_keys', JSON.stringify(keys));
    localStorage.setItem('aic3_settings', JSON.stringify({ language: 'uk' }));
  }, KEYS);
}

async function createOpenAIChat(page) {
  await seedKeys(page);
  await page.goto('/index.html');
  await expect(page.locator('#headerVersion')).toContainText(EXPECTED_VERSION_LABEL);
  await page.locator('#newChatBtn').click();
  await page.locator('#aiCardsContainer [data-toggle="1"]').click(); // OpenAI / ChatGPT
  await expect(page.locator('#createChatBtn')).toBeEnabled();
  await page.locator('#createChatBtn').click();
  await expect(page.locator('#chatHeaderTitle')).toContainText(/(?:Chat|Чат) · ChatGPT/);
}

test('app boots and opens the new-chat screen', async ({ page }) => {
  await seedKeys(page);
  await page.goto('/index.html');
  await expect(page).toHaveTitle(/ProfiDentist\.ai/);
  await expect(page.locator('#headerVersion')).toContainText(EXPECTED_VERSION_LABEL);
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

test('settings exposes developer contact card', async ({ page }) => {
  await seedKeys(page);
  await page.goto('/index.html');
  await page.locator('#settingsBtn').click();
  await page.locator('[data-settings-jump="settingsContactSection"]').click();
  await expect(page.locator('#settingsContactSection')).toContainText('MDDr. Taras Parkhoma');
  await expect(page.locator('#settingsContactSection')).toContainText('+420 608 553 348');
  await expect(page.locator('#settingsContactSection')).toContainText('profidentist.cz@gmail.com');
  await expect(page.locator('#settingsContactSection a[href="https://profidentist.ai"]')).toBeVisible();
});


test('chat swipe closed state fully hides action buttons', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('aic3_settings', JSON.stringify({ language: 'uk' }));
    localStorage.setItem('aic3_chats', JSON.stringify({
      order: ['chat-1'],
      archived: [],
      chats: {
        'chat-1': {
          id: 'chat-1',
          name: 'Swipe regression',
          mode: 'parallel',
          participants: [{ ai: 'openai', level: 1 }],
          messages: [{ id: 'm1', role: 'user', content: 'test', createdAt: Date.now() }],
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      }
    }));
  });
  await page.goto('/index.html');
  const item = page.locator('.chat-item').first();
  const inner = item.locator('.chat-item-inner');
  const actions = item.locator('.swipe-actions-wrap');
  await expect(item).toBeVisible();

  await page.evaluate(() => {
    const row = document.querySelector('.chat-item');
    const card = document.querySelector('.chat-item-inner');
    row.classList.add('is-swiping');
    card.style.transform = 'translate3d(-36px, 0, 0)';
    window.setSwipeState(card, false);
  });

  await expect(inner).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
  await expect(actions).toHaveCSS('opacity', '0');
  await expect(item).not.toHaveClass(/is-swiped|is-swiping/);
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
  await expect(page.locator('.error-card')).toContainText(/квоту|ліміт|оплат|кредит/i);
  await page.locator('.error-card').click();
  await expect(page.locator('#apiErrorOverlay')).toHaveClass(/open/);
  await expect(page.locator('#apiErrorOverlay')).toContainText('HTTP статус');
  await expect(page.locator('#apiErrorOverlay')).toContainText('RESOURCE_EXHAUSTED');
  await expect(page.locator('#apiErrorOverlay')).toContainText('429');
});
