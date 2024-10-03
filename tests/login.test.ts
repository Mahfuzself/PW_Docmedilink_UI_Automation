import test from '../fixtures/basepages'
import { Page, Locator } from '@playwright/test';
import * as data from "testData/login.cred.json"
test.only("Verify login page",async ({page,loginPage})=>{
    await page.goto("/login")
    await loginPage.inputUserName(data.validusername)
    await loginPage.inputPassword(data.validpassword)
    await loginPage.clickLoginBtn()
    await loginPage.VerifyEnterOTPText()


})
test("Verify background color of Login button",async({page,loginPage}) =>{
    const hexcolor = "#0c0c0d"
      const rgbColor = await  loginPage.convertHexToRGB(hexcolor);
      await page.goto("/login")
      await page.waitForTimeout(4000)
      console.log(rgbColor.red,rgbColor.green,rgbColor.blue)
      await loginPage.checkColor("background-color",rgbColor)
})