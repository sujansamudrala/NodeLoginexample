const{Builder, By, Key, Util, until} = require("selenium-webdriver");
async function example(){
    let driver=await new Builder().forBrowser("chrome").build();
    try {

    await driver.get("https://start-stage.nwea.org/");
    await driver.findElement(By.xpath("//button[@id='details-button']")).click();
    await driver.findElement(By.xpath("//a[@id='proceed-link']")).click();
    await driver.findElement(By.xpath("//a[@class='login-btn']")).click();
    let username = By.xpath("//input[@name='identifier']"); 
    await driver.wait(until.elementLocated(username),8000);
    await driver.findElement(By.xpath("//input[@name='identifier']")).sendKeys('plotesting60@gmail.com');
    let usernamebutton = By.xpath("//button[contains(@class, 'idps-not-found')]");
    await driver.wait(until.elementLocated(usernamebutton),8000);
    await driver.findElement(usernamebutton).click();
    let password = By.xpath("//input[@name='password']");
    await driver.wait(until.elementLocated(password), 8000);
    await driver.findElement(By.xpath("//input[@name='password']")).sendKeys('88Portland!');
    let confirmbutton = By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found confirm-button-with-back-button active')]");
    await driver.wait(until.elementsLocated(confirmbutton), 8000);
    await driver.findElement(By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found confirm-button-with-back-button active')]")).click();
    let activebutton = By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found active')]");
    await driver.wait(until.elementLocated(activebutton),20000);
    await driver.findElement(By.xpath("//button[contains(@class, 'confirm-button confirm-button-element idps-not-found active')]")).click();
    let tile = By.xpath("(//div[contains(@class, 'tab-tile-top-text')])[2]");
    await driver.wait(until.elementLocated(tile), 20000);
    console.log('tile displayed');
    driver.manage().getCookies().then(function (cookies) {
        console.log(cookies);
    }); 
    await driver.findElement(By.xpath("(//div[contains(@class, 'tab-tile-top-text')])[2]")).click();
    } finally{
        await driver.quit();
    }
    
}
example();