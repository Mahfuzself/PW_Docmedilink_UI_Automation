import { Page } from '@playwright/test';
import test, { expect } from "@fixtures/basepages";

test("Verify Login UI Page",async({page}) =>{
    await page.goto('/login')
    await page.waitForTimeout(3000)
   expect(await page.screenshot({fullPage:true})).toMatchSnapshot('LoginPage.jpg')

})