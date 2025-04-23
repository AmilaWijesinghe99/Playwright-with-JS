import test, { page, expect } from "@playwright/test";

test("Assertion Demo", async ({ page }) => {
  await page.goto("https:/kitchen.applitools.com/");
  await page.pause();
  //Assertions
  //check element present or not

  await expect(page.locator("text=The kitchen")).toHaveCount(1);

  if (await page.$("text=The kitchen")) {
    await page.locator("text=The kitchen").click();
  }

  //check element hidden or visible
  await expect(page.locator("text=The kitchen")).toBeVisible();
  //await expect.soft(page.locator("text=The kitchen")).toBeHidden();
  //await expect(page.locator("text=The kitchen")).toBeHidden();
});
