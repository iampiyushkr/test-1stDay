const Time = require("../time")

describe("Fine time", () => {
    test("convert 90000 milisecond", () => {
        expect(Time(90000)).toBe("1 minute 30 seconds")
    })
    test("convert 50000 milisecond", () => {
        expect(Time(50000)).toBe("50 seconds")
    })
    test("time <1000", () => {
        expect(Time(200)).toBe("Enter time in milisecond")
    })
})