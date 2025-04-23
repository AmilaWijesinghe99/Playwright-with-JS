import { test, expect, chromium } from "@playwright/test";

test("slow motion and video recording demo", async () => {
  //launch the browser
  const browser = await chromium.launch({
    slowMo: 500,
    headless: false,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

  await page.click("id=user-name");
  await page.locator("id=user-name").fill("standard_user");
  await page.locator("id=password").fill("secret_sauce");
  await page.click("id=login-button");
});
