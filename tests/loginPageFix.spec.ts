import {test,expect} from '../src/fixtures/pageFixtures'
import { CsvHelper } from '../src/utils/CSVHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';


test('Checking Config file reading the GITHUB creds- User able to login@regression',async({loginPage,homePage})=>{
await loginPage.goToLoginPage();
await loginPage.doLogin(process.env.APP_USERNAME!,process.env.APP_PASSWORD!);
await homePage.isLogoutLinkExist();
})