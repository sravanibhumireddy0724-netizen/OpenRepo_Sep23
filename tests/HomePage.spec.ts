import { test, expect } from '@playwright/test';
import{LoginPage} from '../src/Pages/LoginPage';
import{HomePage} from '../src/Pages/HomePage';


let loginPage:LoginPage;
let homePage:HomePage;

test.beforeEach( async({page})=>{
loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
await loginPage.doLogin('dev123@nal.com','Test@123');
homePage=new HomePage(page);

});


test('Verifyting Home Page Headers', async ({ page }) => {

let allHeaders=await homePage.getHomePageHeaders();

console.log("Home page Headers:"+allHeaders);

expect.soft(allHeaders).toHaveLength(4);

expect.soft(allHeaders).toEqual([
'My Account',
'My Orders',
'My Affiliate Account',
'Newsletter'
])



  
});