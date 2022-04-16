const Manager = require('../lib/Manager.js')

test('creates the Manager office', () => {
    const manager = new Manager('111');

    expect(manager.office).toEqual(expect.any(String))
})