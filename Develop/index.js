
// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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
        name: 'lessonsLearned',
        message: 'What lessons did you learn?',
      },
      {
        type: 'input',
        name: 'resourcesUsed',
        message: 'What resources did you use?',
      },
      {
        type: 'input',
        name: 'screenshots',
        message: 'What screenshots do you have?',
      },
      {
        type: 'input',
        name: 'liveSite',
        message: 'Where is this site live?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license did you use?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => console.log(answers))
}

// Function call to initialize app
init();
