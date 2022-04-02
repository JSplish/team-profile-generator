const Employee = require("./Employee");
const inquirer = require("inquirer");


class Intern extends Employee {
  constructor(school, name, id, email, role = "Intern") {
    super(name, id, email, role);
    this.school = school;
  }
}

module.exports = Intern;
