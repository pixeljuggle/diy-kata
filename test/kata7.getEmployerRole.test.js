const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    const employees=[{name:"Satti",role:"Developer"},{name:"Jenny",role:"Sales Associate"},{name:"Javid",role:"Human Recommended Reading Assistant"}];
    const expectedResult = 'Human Recommended Reading Assistant'
    const actualResult = getEmployerRole('Javid', employees)
    expect(actualResult).toBe(expectedResult);
  });
  it("returns the employee's role in the company", () => {
    const employees=[{name:"Satti",role:"Developer"},{name:"Jenny",role:"Sales Associate"},{name:"Javid",role:"Human Recommended Reading Assistant"}];
    const expectedResult = 'Developer'
    const actualResult = getEmployerRole('Satti', employees)
    expect(actualResult).toBe(expectedResult);
  });
  it("returns the employee's role in the company", () => {
    const employees=[{name:"Satti",role:"Developer"},{name:"Jenny",role:"Sales Associate"},{name:"Javid",role:"Human Recommended Reading Assistant"}];
    const expectedResult = 'Sales Associate'
    const actualResult = getEmployerRole('Jenny', employees)
    expect(actualResult).toBe(expectedResult);
  });
});

