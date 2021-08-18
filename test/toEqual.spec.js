

describe("Describe toEqual", ()=>{
    test("{}=={}", () => {
        expect({}).toEqual({})
    })
   test("[]==[]", () => {
        expect([]).toEqual([])
   })
    test(" { a: 1, b: 2 }== { a: 1, b: 2 }", () => {
        expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
    })
      test("[ 1, 2, 3 ]==[ 1, 2, 3 ]", () => {
        expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] )
      })
     test("{ a: 1, b: { c: 1, d: 2 }}=={ a: 1, b: { c: 1, d: 2 }}", () => {
        expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} )
     })
    test("[ 1, 2, [ 1, 2 ] ]==[ 1, 2, [ 1, 2 ] ]", () => {
        expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
    })
      test("{ a: 1, b: { c: 1, d: 2 }}!={ a: 1, b: { c: 1, d: 2 }}", () => {
        expect( { a: 1, b: { c: 1, d: 2 }} ).not.toEqual( { a: 1, b: { e: 1, d: 2 }} )
    })
   test("[ 1, 2, [ 1, 3] ]!==[ 1, 2, [ 1, 2]  ]", () => {
        expect( [ 1, 2, [ 1, 3] ] ).not.toEqual( [ 1, 2, [ 1, 2]  ] )
   })
})