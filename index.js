const inquirer = require('inquirer');
const fs = require('fs');

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

    .then(({ addMember }) => {
        if (addMember === 'Engineer') {
            engineerQuestions();
        } else if (addMember === 'Intern') {
            internQuestions();
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
    .then(({ addMember }) => {
        if (addMember === 'Engineer') {
            engineerQuestions();
        } else if (addMember === 'Intern') {
            internQuestions();
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
    .then(({ addMember }) => {
        if (addMember === 'Engineer') {
            engineerQuestions();
        } else if (addMember === 'Intern') {
            internQuestions();
        }
    })
}

managerQuestions();

// write to file
// constructor in lIBRARY 