const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Check the employee class", () => {
      it("should return employee's name, id and email", () => {
        const lee = new Employee('Lee', '1', 'lee@gmail.com');
  
        expect(lee.getName()).toEqual('Lee');
        expect(lee.getId()).toEqual('1');
        expect(lee.getEmail()).toEqual('lee@gmail.com');
      });
    });
});