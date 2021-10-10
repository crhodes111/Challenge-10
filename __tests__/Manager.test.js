const Manager = require("../lib/Manager");

test('creates a Manager object', () => {
    const manager = new Manager("Conner", "123", "cjr@gmail.com",  "919-555-5555");
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
  });