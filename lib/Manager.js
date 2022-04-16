const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(office, name, ID, email) {
        super(name, ID, email);
        this.office = office;
        
    }
    getRole() {
        return "💼 Manager"
    }
}

module.exports = Manager