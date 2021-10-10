const Employee = require("../lib/Employee");

test('creates a Employee object', () => {
    const employee = new Employee("Conner", "1234", "cjr@gmail.com");
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
  });