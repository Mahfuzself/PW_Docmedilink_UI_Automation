import test from '../fixtures/basepages'
import { Page } from '@playwright/test'
import * as data from "testData/login.cred.json"
test("Verify login page",async ({page,loginPage})=>{
    await page.goto("/login")
    await loginPage.inputUserName(data.validusername)
    await loginPage.inputPassword(data.validpassword)
    await loginPage.clickLoginBtn()
    await loginPage.VerifyEnterOTPText()


})