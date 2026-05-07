import { chromium, firefox, test } from "@playwright/test";

test("Launch Edge and Firefox browsers", async () => {

    // ---------------- EDGE BROWSER ----------------

    // Launch Edge browser
    const edgeBrowser = await chromium.launch({
        headless: false,
        channel: "msedge"
    });

    // Create browser context
    const edgeContext = await edgeBrowser.newContext();

    // Open new page
    const edgePage = await edgeContext.newPage();

    // Load Red Bus website
    await edgePage.goto("https://www.redbus.in");

    // Get page title
    const redBusTitle = await edgePage.title();

    // Get current URL
    const redBusURL = edgePage.url();

    // Print title and URL
    console.log("Red Bus Title : ", redBusTitle);
    console.log("Red Bus URL   : ", redBusURL);



    // ---------------- FIREFOX BROWSER ----------------

    // Launch Firefox browser
    const firefoxBrowser = await firefox.launch({
        headless: false
    });

    // Create browser context
    const firefoxContext = await firefoxBrowser.newContext();

    // Open new page
    const firefoxPage = await firefoxContext.newPage();

    // Load Flipkart website
    await firefoxPage.goto("https://www.flipkart.com");

    // Get page title
    const flipkartTitle = await firefoxPage.title();

    // Get current URL
    const flipkartURL = firefoxPage.url();

    // Print title and URL
    console.log("Flipkart Title : ", flipkartTitle);
    console.log("Flipkart URL   : ", flipkartURL);


    // Wait for 5 seconds
    await edgePage.waitForTimeout(5000);

    // Close browsers
    await edgeBrowser.close();
    await firefoxBrowser.close();

});