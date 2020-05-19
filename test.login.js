const{Builder, By, Key, Util, until} = require("selenium-webdriver");

async function loginexample(){

    let driver=await new Builder().forBrowser("chrome").build();
    try {
        let username = By.xpath("//input[@name='identifier']");
        let usernamebutton = By.xpath("//button[contains(@class, 'idps-not-found')]");
        let password = By.xpath("//input[@name='password']");
        let confirmbutton = By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found confirm-button-with-back-button active')]");
        let activebutton = By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found active')]");
        let tile = By.xpath("(//div[contains(@class, 'tab-tile-top-text')])[2]");
        
        await driver.get("https://start-stage.nwea.org/");
        await driver.findElement(By.xpath("//button[@id='details-button']")).click();
        await driver.findElement(By.xpath("//a[@id='proceed-link']")).click();
        await driver.findElement(By.xpath("//a[@class='login-btn']")).click();
        await driver.wait(until.elementLocated(username),8000);
        await driver.findElement(username).sendKeys('plotesting60@gmail.com');
        await driver.wait(until.elementLocated(usernamebutton),8000);
        await driver.findElement(usernamebutton).click();
        await driver.wait(until.elementLocated(password), 8000);
        await driver.findElement(password).sendKeys('88Portland!');
        await driver.wait(until.elementsLocated(confirmbutton), 8000);
        await driver.findElement(By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found confirm-button-with-back-button active')]")).click();
        await driver.wait(until.elementLocated(activebutton),20000);
        await driver.findElement(activebutton).click();
        await driver.wait(until.elementLocated(tile), 20000);
        console.log('Transcripts tile displayed');
        driver.manage().getCookies().then(function (cookies) {
        console.log(cookies);
        }); 
        
    } finally{
        await driver.quit();
    }    
}
loginexample();