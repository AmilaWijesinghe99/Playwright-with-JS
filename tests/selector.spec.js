import {test,expect} from '@playwright/test';

test('selector',async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill("standard_user")
    await page.locator('id=password').fill("secret_sauce")
    //await page.click('id=login-button');

    // use CSS selector

    //await page.locator('#login-button').click("amila")

    // use Xpath

    await page.locator("//input[@name='user-name']").fill("kamal")
    await page.locator("xpath=//input[@name='user-name']").fill("kamal")
})