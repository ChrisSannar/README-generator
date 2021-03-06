const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub profile username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the directions to use the project?',
        default: 'npm start'
    },
    {
        type: 'list',
        name: 'licence',
        message: 'What licence is the project under?',
        default: 'MIT',
        choices: ['MIT', 'GLP', 'None']
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'Who are the authors of this project? (insert names seperated by commas)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the project?',
        default: 'npm test'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('./output/' + fileName, data);
}

// ***
const test = {
    github: 'ChrisSannar',
    email: 'chris.sannar.dev@gmail.com',
    title: 'test',
    description: 'tested',
    install: 'npm install',
    usage: 'npm start',
    licence: 'GLP',
    contrib: 'Duders',
    tests: 'npm test'
}
// ***

// function to initialize program
function init() {
    writeToFile('README.md', generateMarkdown(test));
    // inquirer
    //     .prompt(questions)
    //     .then(answers => {
    //         console.log(answers);
    //         // writeToFile('README.md', 'testing');
    //     });
        // .catch(err => console.error(err));
}

// function call to initialize program
init();