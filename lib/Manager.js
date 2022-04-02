const Employee = require("./Employee");
const inquirer = require("inquirer");



class Manager extends Employee {
  constructor(officeNumber, name, id, email, role = "Manager") {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;