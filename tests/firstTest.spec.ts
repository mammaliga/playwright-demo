import { test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    page.goto("localhost:4200")
})

test.describe("test suite #1", () => {
    test.beforeEach(async ({page}) => {
        await page.getByRole("link", {name: "Forms"}).click()
    })
    test.skip("test case #1", async ({page}) => {
        await page.getByRole("link", {name: "Datepicker"}).click()
        await page.locator("nb-card").getByRole("textbox", {name: "Form Picker"}).click()
    })
    test("test case #2", async ({page}) => {
        await page.getByRole("link", {name: "Form Layouts"}).click()
        await page.locator("nb-card").filter({hasText: "Block Form"}).getByRole("textbox", {name: "Email"}).click()
    })

})