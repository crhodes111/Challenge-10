const Engineer = require("../lib/Engineer");

test('creates a Engineer object', () => {
    const engineer = new Engineer("Conner", "1234", "cjr@gmail.com",  "crhodes111");
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });