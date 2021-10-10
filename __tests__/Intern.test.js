const Intern = require("../lib/Intern");

test('creates a Intern object', () => {
    const intern = new Intern("Conner", "123", "cjr@gmail.com",  "NC State");
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });