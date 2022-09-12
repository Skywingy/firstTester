const mathOperations = require('./calculator');



//1.Calculator
describe("Calculator tests", () => {

test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = mathOperations.sum(1,2)
   // assert
expect(result).toBe(3);
});

test("subtracting 2 from 10 should return 8", () => {
   // arrange and act
var result = mathOperations.diff(10,2)

   // assert
expect(result).toBe(8);
});

test("multiplying 2 and 8 should return 16", () => {
   // arrange and act
var result = mathOperations.product(2,8)

   // assert
expect(result).toBe(16);

});

test("dividing 16 by 4 should return 4", () => {
   // arrange and act
var result = mathOperations.divide(16,4)

   // assert
expect(result).toBe(4);

});

})