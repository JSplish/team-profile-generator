const Employee = require('../lib/Employee.js')

test('create an employee object', () => {
    const employee = new Employee('Jordan', '1', 'example@example.com');

    expect(employee.name).toEqual(expect.any(String))
})

// gets name from getName()
test('will get employee name', () => {
    const employee = new Employee('Jordan', '1', 'example@example.com');

    expect(employee.getName()).toEqual(expect.any(String))
})

// gets name from getID()
test('will get employee ID', () => {
    const employee = new Employee('Jordan', '1', 'example@example.com');

    expect(employee.getId()).toEqual(expect.any(String))
})

// gets name from getEmail()
test('will get employee email', () => {
    const employee = new Employee('Jordan', '1', 'example@example.com');

    expect(employee.getEmail()).toEqual(expect.any(String))
})

// gets name from getRole()
test('will get employee role', () => {
    const employee = new Employee('');

    expect(employee.getRole()).toEqual(expect.any(String))
})

