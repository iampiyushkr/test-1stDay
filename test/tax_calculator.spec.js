const Tax = require("../tax_calculator")

describe("Tax Calculator", () => {
    test("below 250000", () => {
        expect(Tax(2000)).toBe("No Tax")
    })
    test("between 250000 to 500000", () => {
        expect(Tax(300000)).toBe("30000 tax")
    })
     test("between 500000 to 1000000", () => {
        expect(Tax(600000)).toBe("120000 tax")
    })
    test("Above 1000000", () => {
        expect(Tax(2000000)).toBe("600000 tax")
    })
     test("Above 1000000", () => {
        expect(Tax(3000000)).toBe("900000 tax")
    })
    test("argument greater than 1", ()=>{
        expect(Tax(2000,300)).toBe("Invalid")
    })
})