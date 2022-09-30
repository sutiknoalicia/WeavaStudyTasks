import { LoginPage } from "../pages/login_page";
const loginPage = new LoginPage(); // let & const is for creating new variables

it("login test", () => {
  loginPage.navigate("https://trytestingthis.netlify.app/");
  loginPage.enterUsername("test");
  loginPage.enterPassword("test");
  loginPage.clickLogin();
});
