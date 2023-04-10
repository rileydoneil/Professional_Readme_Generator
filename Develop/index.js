
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateKey } = require("crypto");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    type: 'input',
    message: "What's the project title?",
    },
    {
    name: 'description',
    type: 'input',
    message: "What's the description of this project?",
    },
    {
    name: 'installation',
    type: 'input',
    message: 'How do you install this?',
    },
    {
    name: 'Usage',
    type: 'input',
    message: 'How do you use this?',
    },
    {
    name: 'Contributing',
    type: 'input',
    message: 'What resources did you use/ who is contributing?',
    },
    {
    name: 'license',
    type: 'list',
    message: 'What license did you use?',
    choices: [
        'Academic Free License v3.0',
        'Apache license 2.0',
        'Artistic license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'BSD 3-clause Clear license',
        'Creative Commons license family',
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Creative Commons Attribution Share Alike 4.0',
        'Do What The F*ck You Want To Public License',
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',
        'Eclipse Public License 2.0', 
        'European Union Public License 1.1', 
        'GNU Affero General Public License v3.0', 
        'GNU General Public License family', 
        'GNU General Public License v2.0', 
        'GNU General Public License v3.0', 
        'GNU Lesser General Public License family', 
        'GNU Lesser General Public License v2.1', 
        'GNU Lesser General Public License v3.0', 
        'ISC', 
        'LaTeX Project Public License v1.3c', 
        'Microsoft Public License', 
        'MIT', 
        'Mozilla Public License 2.0', 
        'Open Software License 3.0', 
        'PostgreSQL License', 
        'SIL Open Font License 1.1', 
        'University of Illinois/NCSA Open Source License', 
        'The Unlicense', 
        'zLib License',
    ]
    },
    {
      name: 'color',
      type: 'list',
      message: "what color for the license badge?",
      choices: [
        'brightgreen',
        'green',
        'yellowgreen',
        'yellow',
        'orange',
        'red',
        'blue',
        'lightgrey',
        'blueviolet',
      ],
    },
    {
    name: 'tests',
    type: 'input',
    message: 'What tests did you perform?',
    },
    {
    name: 'questions',
    type: 'input',
    message: 'What is your github?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, generateMarkdown(data), err => {
    err ? console.log(err) : console.log(data);
    
  })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answers) => writeToFile('READMETest.md', answers))
}

// Function call to initialize app
init();
