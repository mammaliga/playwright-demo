import { test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    page.goto("localhost:4200")
})

test.describe("test suite #1", () => {
    test("play around with forms", async ({page}) => {
        await page.getByRole("link", {name: "Forms"}).click()
        await page.getByRole("link", {name: "Datepicker"}).click()
        await page.locator("nb-card").getByRole("textbox", {name: /form picker/i}).click()
    })
})