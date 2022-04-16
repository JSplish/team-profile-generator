const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/generateHtml');
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

    .then(({ name, id, email, officeNumber, addMember }) => {
        roster.push(new Manager(officeNumber, name, id, email, addMember));
        console.log("roster = ", roster);
        if (addMember === "Engineer") {
          engineerQuestions();
        } else if (addMember === "Intern") {
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
    .then(({ name, id, email, github, addMember }) => {
        roster.push(new Engineer(github, name, id, email, addMember ));
        console.log("roster = ", roster);
        if (addMember === "Engineer") {
          engineerQuestions();
        } else if (addMember === "Intern") {
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
    .then(({ name, id, email, school, addMember }) => {
        roster.push(new Intern(school, name, id, email, addMember ));
        console.log("roster = ", roster);
        if (addMember === "Engineer") {
          engineerQuestions();
        } else if (addMember === "Intern") {
          internQuestions();
        } else {
          createHTML(roster);
        }
    })
}

  const createHTML = (roster) => {
    const html = generateTeam(roster);
    fs.writeFile("./dist/index.html", html, function (err) {
      if (err) throw err;
      console.log("HTML file generated");
    });
  };

managerQuestions();