import { expect, Page } from "@playwright/test";
import * as data from "testData/login.cred.json"
export default class LoginPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    private loginPageLocator = {
        usernameField : "input[type='email']",
        passwordField : "input[type='password']",
        logInBtn : "button[type='submit']",
        EnterOTPcodesentto: '//p[text()="Enter OTP code sent to "]'
    }
    async inputUserName(username : String){
        let ele = await this.page.locator(this.loginPageLocator.usernameField)
        try {
            await ele.fill(`${username}`);
        } catch (error) {
            throw new Error(`Login Page >> Input User Name >> UserName can not provide properly : ${Error}`)
        }

    }
    async inputPassword(password : String){
        let ele = await this.page.locator(this.loginPageLocator.passwordField)
        try {
            await ele.fill(`${password}`);
        } catch (error) {
            throw new Error(`Login Page >> Input Password >> Password can not provide properly : ${Error}`)
        }

    }

    async clickLoginBtn(){
        let ele = await this.page.locator(this.loginPageLocator.logInBtn)
        try {
            await ele.click();
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Login Page >> Input User Name and Password >> Login btton does not working properly : ${Error}`)
        }
    }
    async VerifyEnterOTPText(){
        let ele = await this.page.locator(this.loginPageLocator.EnterOTPcodesentto)
        try {
            await expect(ele).toContainText("Enter OTP code sent to")
            await this.page.waitForTimeout(1000)
        } catch (error) {
            throw new Error(`Login Page >> Input User Name and Password >> Login btton >>  doed not working properly : ${Error}`)
        }
    }
    
    
}