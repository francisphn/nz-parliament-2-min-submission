const express = require('express');
const app = express();
require('chromedriver');
const { Builder, By, Key, until} = require('selenium-webdriver');

const port = 3030;

app.get('/', async (req, res) => {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.parliament.nz/en/ECommitteeSubmission/53SCFE_SCF_BILL_124081/CreateSubmission');

        const click1 = await driver.findElement(By.xpath('//*[@id="submission"]/ol/li[1]/fieldset[1]/div/div[1]/label')).click()
        const click2 = await driver.findElement(By.xpath('//*[@id="submission"]/ol/li[1]/fieldset[2]/div/div[2]/label')).click()

        await driver.executeScript("window.scrollBy(0,700)")
        await driver.findElement(By.xpath('//*[@id="submission"]/ol/li[1]/div[2]/div/button')).click()

        await driver.executeScript("window.scrollBy(0,700)")
        await driver.findElement(by.xpath('//*[@id="Title"]')).sendKeys("Mr")


        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        // await driver.quit();
    }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))