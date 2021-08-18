const { test } = require("@jest/globals");
const diff = require("../diff")

describe("checking functionality of difference", () => {
    test("2-1==1", () => {
        expect(diff(2,1)).toBe(1)
    })
    test("2-(-1)==3", () => {
        expect(diff(2,-1)).toBe(3)
    })
     test("Not equal", () => {
        expect(diff(-2,1)).not.toBe(1)
     })
     test("More than 2 argument", () => {
        expect(diff(2,-1,2)).toBe("More than arguments")
    })
})