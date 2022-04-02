const Intern = require('../lib/Intern.js')

test('creates the Intern object', () => {
    const intern = new Intern('Jordan', 'school');

    expect(intern.school).toEqual(expect.any(String))
})