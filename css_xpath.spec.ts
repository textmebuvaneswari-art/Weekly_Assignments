
import { test } from "@playwright/test";


test("Create Lead using both CSS and Relative Xpath", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("democsr2");
    await page.locator('[id="password"]').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.waitForTimeout(3000); // For demo purpse
    await page.locator('//a[contains(text(), "CRM/SFA")]').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[contains(text() ,"Leads")]').click();
    await page.locator('//a[contains(text(), "Create Lead")]').click();
    await page.waitForTimeout(3000);
    await page.locator('//input[contains(@id,"createLeadForm_companyName")]').fill("Test_Leaf");
    await page.locator('//input[@id = "createLeadForm_firstName"]').fill("Buvana");
    await page.locator('//input[@id = "createLeadForm_lastName"]').fill("Bava");
    await page.waitForTimeout(3000);
    await page.locator('//input[@value = "Create Lead"]').click();
    await page.waitForTimeout(3000);
 })