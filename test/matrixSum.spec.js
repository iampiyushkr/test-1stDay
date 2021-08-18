const Mat = require("../matrixSum")

describe("Matrix sum", () => {
    test("sum of [[1,2,3],[4,5,6]]", () =>{
        expect(Mat([[1,2,3],[4,5,6]])).toBe(21)
    })
     test("Row error", () =>{
        expect(Mat([[1,2,3]])).toBe("Invalid row of matrix")
     })
    test("Row error", () =>{
        expect(Mat([[1,2,3],[2,5,4],[3,7,6]])).not.toBe("Invalid row of matrix")
     })
      test("Column error", () =>{
        expect(Mat([[1,2],[4,5,6]])).toBe("Invalid column of matrix")
      })
     test("Column error", () =>{
        expect(Mat([[1,2,3,4],[4,5,6]])).toBe("Invalid column of matrix")
      })
     test("Column error", () =>{
        expect(Mat([[1,2],[4,5,6]])).not.toBe("valid column of matrix")
     })
     test("Row error", () =>{
        expect(Mat([[1,2,3]])).not.toBe("valid row of matrix")
     })
     
})