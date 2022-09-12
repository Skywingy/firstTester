const reverse = require('./reverseString');


//3. Reverser
describe("Reverses tests", () => {

    test('Should return reversed string ', () => {
       // arrange and act
    var result = reverse("hungry")
       // assert
    expect(result).toBe("yrgnuh");
    });


    test('Should return reversed string ', () => {
      // arrange and act
    var result = reverse("hello world")
      // assert
    expect(result).toBe("dlrow olleh");
    });
})