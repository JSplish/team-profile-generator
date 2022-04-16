const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(github, name, ID, email) {
        super(name, ID, email);
        this.github = github
    }
    getGithub () {
        return this.github
    }
    getRole () {
        return "⚙️ Engineer"
    }
}

module.exports = Engineer;