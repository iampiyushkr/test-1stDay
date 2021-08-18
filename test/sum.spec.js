const { test } = require("@jest/globals");
const sum=require("../sum")

describe("testing the functionality of sum function", function () {
    test("adds 1+2 to equal 3",()=> {
        expect(sum(1, 2)).toBe(3);
    })
    test("adds 1 + -2 to equal -1", () => {
        expect(sum(1, -2)).toBe(-1);
    })
    test("arrguments not equal to 2", () => {
        expect(sum(2,3,4)).toBe("Invalid")
    })
    
})