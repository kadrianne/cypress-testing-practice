describe("Google", () => {
    it("loads the page", () => {
        // 1. Open a browser
        // 2. Type in google.com
        cy.visit("https://www.google.com")
        // 3. Check that the google logo displays
        cy.get("#hplogo").should("exist")
        cy.get("#hptl").should("contain.text", "Store")
    })
})

describe("Instacart", () => {
    it("shows Groceries delivered in as little as 1 hour", () => {
        cy.visit("https://www.instacart.com/")
        cy.get("h1").should("have.text", "Groceries delivered in as little as 1 hour")
    })
})

describe("Drizly", () => {
    it("shows Beer, wine and liquor delivered to your doorstep.", () => {
        cy.visit("https://drizly.com/home/")
        // cy.get("nav").should("have.text", "Beer, wine and l  iquor delivered to your doorstep.")
    })
})