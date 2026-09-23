import {test,expect} from '../src/fixtures/pageFixtures'
import { LoginPage } from '../src/Pages/LoginPage'

test.beforeEach(async({loginPage})=>{
    await loginPage.goToLoginPage();
    await loginPage.doLogin('dev123@nal.com','Test@123');
})


test('HomePage Headers verifications@regression',async({homePage})=>{

    const pageTitle= await homePage.getHomePageTitle();

    console.log(("Page title is "+pageTitle));

    
    let allHeaders=await homePage.getHomePageHeaders();
    
    console.log("Home page Headers are:"+allHeaders);
    
    expect.soft(allHeaders).toHaveLength(4);
    
    expect.soft(allHeaders).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'
    ])


})