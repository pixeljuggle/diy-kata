const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe('should be there in 4.5 hours.');
    expect(reachDestination(46, 10)).toBe('should be there in 4.5 hours.');
    expect(reachDestination(14, 30)).toBe('should be there in 0.5 hours.');
    expect(reachDestination(45, 15)).toBe('should be there in 3 hours.');
  });
});
