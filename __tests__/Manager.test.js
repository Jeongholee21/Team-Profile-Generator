const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Check the Manager class", () => {
      it("should return Manager's name, id, email, number and role", () => {
        const choi = new Manager('choi', '3', 'choi@gmail.com', '4703333');
  
        expect(choi.getName()).toEqual('choi');
        expect(choi.getId()).toEqual('3');
        expect(choi.getEmail()).toEqual('choi@gmail.com'); 
        expect(choi.getNumber()).toEqual('4703333');
        expect(choi.getRole()).toEqual('Manager');
      });
    });
});