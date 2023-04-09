
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the project title?",
      },
      {
        type: 'input',
        name: 'description',
        message: "What's the description of this project?",
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'What are the table of contents?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'How do you use this?',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'What resources did you use/ who is contributing?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license did you use?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests did you perform?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'What is your github?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => writeToFile('README.md', answers))
}

// Function call to initialize app
init();
