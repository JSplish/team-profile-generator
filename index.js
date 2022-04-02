const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHtml');
let roster = [];

const managerQuestions = () => {
    return inquirer.prompt([  // Difference between return inquirer.prompt and inquirer.prompt ????
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Managers office number?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
        
    ])

    .then(({ addMember, name, id, email, role, officeNumber }) => {
        roster.push(new Manager(officeNumber, name, id, email, role ));
        console.log("roster = ", roster);
        if (addMember === "Add Engineer") {
          engineerQuestions();
        } else if (addMember === "Add Intern") {
          internQuestions();
        } else {
          createHTML(roster);
        }
    })
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers github?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then(({ addMember, name, id, email, role, officeNumber }) => {
        roster.push(new Manager(officeNumber, name, id, email, role ));
        console.log("roster = ", roster);
        if (addMember === "Add Engineer") {
          engineerQuestions();
        } else if (addMember === "Add Intern") {
          internQuestions();
        } else {
          createHTML(roster);
        }
    })
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then(({ addMember, name, id, email, role, officeNumber }) => {
        roster.push(new Manager(officeNumber, name, id, email, role ));
        console.log("roster = ", roster);
        if (addMember === "Add Engineer") {
          engineerQuestions();
        } else if (addMember === "Add Intern") {
          internQuestions();
        } else {
          createHTML(roster);
        }
    })
}

const createHTML = (roster) => {
    const html =  generateHTML(roster);
    fs.writeFile('./src/index.html', html, function (err){
      if (err) throw err;
      console.log('HTML file generated');
    });
  };

managerQuestions();