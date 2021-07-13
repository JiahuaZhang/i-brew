import { test } from '@playwright/test';
import { user } from '../config'

test('login', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await Promise.all([
    page.waitForNavigation(),
    page.click('text=Sign in with Facebook')
  ]);

  await page.fill('[placeholder="Email or Phone Number"]', user.email);
  await page.fill('[placeholder="Password"]', user.password);

  await Promise.all([
    page.waitForNavigation(),
    page.click('button:has-text("Log In")')
  ]);

  await page.pause();
});

// todo:
// config page
// - 2 pages? update config in one place, the other place value should sync up
// - modal & config page should sync up eventually
// - updating the config should take effect immediately, locale? etc

// locale update
// updating the locale should auto sync up

// hover style update
// 2 pages? updating the config, the idea page's interaction updated as well?