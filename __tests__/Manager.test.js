const Manager = require('../lib/Manager.js')

test('creates the Manager object', () => {
    const manager = new Manager('Jordan', 'office');

    expect(manager.officeNumber).toEqual(expect.any(String))
})