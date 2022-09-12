const capitilize = require('./capitilize');


//2.Capitilizer
describe("Capitilize tests", () => {

   test('Should return capitilized string ', () => {
       // arrange and act
   var result = capitilize("hungry")
       // assert
   expect(result).toBe("Hungry");
   });


   test('Should return capitilized string ', () => {
      // arrange and act
   var result = capitilize("hello world")
      // assert
   expect(result).toBe("Hello world");
   });
})