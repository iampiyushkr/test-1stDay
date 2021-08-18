const Password = require("../passwordValidator")

describe("Password Validator", () => {
    test("minimum 6 character", () => {
        expect(Password("as1@#")).toBe("Password must min 6 char")
    })
    test("Capital missing", () => {
        expect(Password("asxd1@#")).toBe("Capital letter missing")
    })
     test("small letter missing", () => {
        expect(Password("ASDC1@#")).toBe("Small letter missing")
     })
     test("symbol  missing", () => {
        expect(Password("ASDas980")).toBe("Symbol missing")
     })
    test("Number  missing", () => {
        expect(Password("ASDas@#")).toBe("Number missinng")
    })
})