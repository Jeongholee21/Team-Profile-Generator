const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Check the Intern class", () => {
      it("should return Intern's name, id, email, school and role", () => {
        const park = new Intern('park', '3', 'park@gmail.com', 'UCLA');
  
        expect(park.getName()).toEqual('park');
        expect(park.getId()).toEqual('3');
        expect(park.getEmail()).toEqual('park@gmail.com'); 
        expect(park.getSchool()).toEqual('UCLA');
        expect(park.getRole()).toEqual('Intern');
      });
    });
});