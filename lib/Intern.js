const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(school, name, ID, email) {
        super(name, ID, email);
        this.school = school
    }
    getSchool () {
        return this.school
    }
    getRole () {
        return "🎓 Intern"
    }
}

module.exports = Intern;
