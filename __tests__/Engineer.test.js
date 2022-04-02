const Engineer = require('../lib/Engineer.js')

test('creates the Engineer object', () => {
    const engineer = new Engineer('Jordan', 'github');

    expect(engineer.github).toEqual(expect.any(String))
})


