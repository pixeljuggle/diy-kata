const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(987654)).toEqual([4, 5, 6, 7, 8, 9]);
    expect(numberToReversedDigits(456)).toEqual([6, 5, 4]);
    expect(numberToReversedDigits(124578)).toEqual([8, 7, 5, 4 , 2, 1]);
  });
});
