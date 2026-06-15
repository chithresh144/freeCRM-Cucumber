import { Given, When, Then } from '@cucumber/cucumber';
import { LoginFreeCRMPage } from '../pages/LoginFreeCRMPage';
import { CompanyPage } from '../pages/CompanyPage';

// ✅ Shared objects
let loginPage: LoginFreeCRMPage;
let companyPage: CompanyPage;

Given('user navigates to Free CRM application', async function () {
  loginPage = new LoginFreeCRMPage(this.page);
  await loginPage.navigate();
});

When('user logs into the application', async function () {
  this.newTab = await loginPage.login();
  companyPage = new CompanyPage(this.newTab);
});

When('user navigates to companies page', async function () {
  await companyPage.navigateToCompanies();
});

When('user creates a company', async function () {
  await companyPage.clickAddCompany();

  // ✅ same pattern as testContext
  await companyPage.fillCompanyDetails(this);
});

Then('user verifies the company by searching', async function () {
  await companyPage.searchCompany(this);

  const screenshot = await this.newTab.screenshot();
  await this.attach(screenshot, {
    mediaType: 'image.png'
  });
});

When('user edits the company details', async function () {
  await companyPage.editdetails(this);

  const screenshot = await this.newTab.screenshot();
  await this.attach(screenshot,  {
    mediaType: 'image.png'
  });
});
/*
When('user deletes the company', async function () {
  await companyPage.deleteCompany(this);

  const screenshot = await this.newTab.screenshot();
  await this.attach(screenshot, {
    mediaType: 'image.png'
  });
});
*/
