const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("http://localhost:4200/");
driver.wait(
  webdriver.until.elementLocated({
    className: "card-container"
  })
);

driver
  .findElement({
    className: "card-container"
  })
  .click();
