import {test,expect} from '../src/fixtures/pageFixtures'
import { CsvHelper } from '../src/utils/CSVHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';


// test('User is able to  login',async({loginPage,homePage})=>{
// await loginPage.goToLoginPage();
// await loginPage.doLogin('dev123@nal.com','Test@123');
// await homePage.isLogoutLinkExist();
// })

// test('User is unable to  login',async({loginPage,testData})=>{

// console.log(testData);
// console.log(testData.length);

// for(let row of testData){
//     await loginPage.goToLoginPage();
//     await loginPage.doLogin(row.username,row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
// }

// })



// let testData=CsvHelper.readCsv('src/data/loginData.csv');
// console.log(testData);
// console.log(testData.length);

// for(let row of testData){
// test(`CSV Import - User is unable to login with -${row.username} and ${row.password}`,async({loginPage})=>{
//     await loginPage.goToLoginPage();
//     await loginPage.doLogin(row.username,row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
// }
// )
// }


// let InvalidloginTestData=ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx');

// console.log(InvalidloginTestData);

// for(let row of InvalidloginTestData ){
// test(`Excel Import - User is unable to login with -${row.username} and ${row.password}`,async({loginPage})=>{
//     await loginPage.goToLoginPage();
//     await loginPage.doLogin(row.username,row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
// }
// )
// }


// let LoginJSONData=JsonHelper.readJson('src/data/logindata.json')

// console.log(LoginJSONData);

// for(let row of LoginJSONData ){
// test(`Json Import - User is unable to login with -${row.username} and ${row.password}`,async({loginPage})=>{
//     await loginPage.goToLoginPage();
//     await loginPage.doLogin(row.username,row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
// }
// )
// }


test('Checking Config file reading - User able to login',async({loginPage,homePage})=>{
await loginPage.goToLoginPage();
await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
await homePage.isLogoutLinkExist();
})