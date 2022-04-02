const Employee = require("./Employee");
const inquirer = require("inquirer");


class Engineer extends Employee {
  constructor(github, name, id, email, role = "Engineer") {
    super(name, id, email, role);
    this.github = github;
  }
}

module.exports = Engineer;