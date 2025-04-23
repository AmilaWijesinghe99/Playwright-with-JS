import { test, expect } from "@playwright/test";

test("demo_login_1", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.click("id=user-name");
  await page.locator("id=user-name").fill("standard_user");
  await page.locator("id=password").fill("secret_sauce");
  await page.click("id=login-button");
});

test("demo_login_2", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");

  await page.click("id=username");
  await page.locator("id=username").fill("standard_user");
  await page.locator("id=password").fill("secret_sauce");
  await page.click("id=log-in");
});

test("demo_login_3", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  //await page.pause();
});
