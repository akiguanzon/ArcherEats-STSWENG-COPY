// import chromedriver so that selenium can by itself open a chrome driver

require("chromedriver");

// import this classes from selenium
const { Builder, By, Key, until } = require("selenium-webdriver");

var assert = require("assert");

// describe test
describe("Perform Search", function () {
    // it describes expected behaviour when user perfroms search on google
    it("A user performs a Search on Google", async function () {
        // open chrome browser
        let driver = await new Builder().forBrowser("chrome").build();
        try {
            // navigate to to this website
            await driver.get("http://localhost:3000");

            // find a search box element with name ='q'

            await driver.wait(until.titleIs("Home | ArcherEats"), 1000);

            assert.strictEqual(pageTitle, "Home | ArcherEats");
            if (pageTitle) {
                console.log("Page Title:", pageTitle);
            }

        } finally {
            // close the browser
            await driver.quit();
        }
    });
});
