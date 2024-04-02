import { test, expect } from "@playwright/test";

test.beforeEach(async ({page}) => {
    page.goto("localhost:4200")
})

test.describe("test suite #1", () => {
    test.beforeEach(async ({page}) => {
        await page.getByRole("link", {name: "Forms"}).click()
    })
    test("go to datepicker section", async ({page}) => {
        await page.getByRole("link", {name: "Datepicker"}).click()
        await page.locator("nb-card").getByRole("textbox", {name: "Form Picker"}).click()
    })
    test("filling inputs and sumbitting", async ({page}) => {
        await page.getByRole("link", {name: "Form Layouts"}).click()
        const blockForm = page.locator("nb-card").filter({hasText: "Block Form"})
        await blockForm.getByRole("textbox", {name: "First Name"}).fill("manuel")
        await blockForm.getByRole("textbox", {name: "Last Name"}).fill("savandov")
        await blockForm.getByRole("textbox", {name: "Email"}).fill("manuel@gmail.com")
        await blockForm.getByRole("textbox", {name: "Website"}).fill("https://mamaliga.co")

        const fNameValue = await blockForm.getByRole("textbox", {name: "First Name"}).inputValue()
        const lNameValue = await blockForm.getByRole("textbox", {name: "Last Name"}).inputValue()
        const email = await blockForm.getByRole("textbox", {name: "Email"}).inputValue()
        const website = await blockForm.getByRole("textbox", {name: "Website"}).inputValue()

        expect(fNameValue).toEqual("manuel")
        expect(lNameValue).toEqual("savandov")
        expect(email).toEqual("manuel@gmail.com")
        expect(website).toEqual("https://mamaliga.co")

        await blockForm.getByRole("button").click()
    })
    test("assertions", async ({page}) => {
        
    })

})