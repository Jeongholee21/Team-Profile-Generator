const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Check the Engineer class", () => {
      it("should return Engineer's name, id, email, github and role", () => {
        const kim = new Engineer('Kim', '2', 'kim@gmail.com', 'kimkim');
  
        expect(kim.getName()).toEqual('Kim');
        expect(kim.getId()).toEqual('2');
        expect(kim.getEmail()).toEqual('kim@gmail.com'); 
        expect(kim.getGithub()).toEqual('kimkim');
        expect(kim.getRole()).toEqual('Engineer');
      });
    });
});