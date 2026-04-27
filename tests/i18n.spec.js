const { test, expect } = require('@playwright/test');

async function openSettings(page) {
  await page.locator('#settingsBtn').click();
  await expect(page.locator('#settingsOverlay')).toHaveClass(/open/);
}

test('language switch updates UI and persists after reload', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page.locator('html')).toHaveAttribute('lang', 'uk');

  await openSettings(page);
  await page.locator('[data-settings-jump="settingsLanguageSection"]').click();
  await page.locator('[data-lang-option="cs"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'cs-CZ');
  await expect(page.locator('#settingsOverlay')).toContainText('Jazyk rozhraní');
  await expect(page.locator('#saveSettingsBtn')).toContainText('Uložit');

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'cs-CZ');
  await expect(page.locator('#settingsBtn')).toHaveAttribute('aria-label', 'Nastavení');

  await openSettings(page);
  await page.locator('[data-settings-jump="settingsLanguageSection"]').click();
  await page.locator('[data-lang-option="en"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#settingsOverlay')).toContainText('Interface language');
  await expect(page.locator('#saveSettingsBtn')).toContainText('Save');
});

test('new chat screen and placeholders are localized', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('aic3_settings', JSON.stringify({ language: 'cs' }));
  });
  await page.goto('/index.html');
  await page.locator('#newChatBtn').click();
  await expect(page.locator('#screenNew')).toContainText('Nový chat');
  await expect(page.locator('#chatNameInput')).toHaveAttribute('placeholder', /implantologii/);
  await expect(page.locator('#createChatBtn')).toContainText('Vytvořit chat');
});

test('raw translation keys are not visible in the main UI', async ({ page }) => {
  await page.goto('/index.html');
  const body = await page.locator('body').innerText();
  expect(body).not.toMatch(/\b(?:settings|newChat|chat|menu|flash|template)\.[a-zA-Z0-9_.-]+\b/);
});
