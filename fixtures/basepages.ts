import path = require('path');
import LoginPage from '../pages/loginPage';
import { test as baseTest } from '@playwright/test';

const test = baseTest.extend<{
    loginPage: LoginPage;
   

}>(
    {
        loginPage: async ({page }, use) => {
                    await use(new LoginPage(page));
                },
              

            },
)
export default test;
export const expect = test.expect;