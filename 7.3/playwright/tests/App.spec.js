import { test } from "@playwright/test";
import { email, password } from "../user.js";

test("Позитивный сценарий авторизации", async ({ page }) => {
  test.slow();

  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(email);

  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill(password);

  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();

  await page.locator("text=Мои курсы и профессии").isVisible();
});

test("Негативный сценарий авторизации", async ({ page }) => {
  test.slow();

  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill("email@gmail.com");

  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill("Password123");

  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();

  // error notification appears
  await page.locator('[data-testid="login-error-hint"]').isVisible();
});
