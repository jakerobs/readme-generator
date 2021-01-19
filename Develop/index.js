// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const promptReadme = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the ReadMe Title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Title!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your repository description',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter your repository installation instructions!',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your repository usage instructions!',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your usage instructions!');
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What license would you like for this project?',
            choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New"', 'Boost Software 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public 2.0', 'GNU AGPLv3', 'GNU GPLv2', 'GNU LGPLv2.1', 'Mozzila Public 2.0', 'The Unilicense',]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Enter your repository contributors!',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter your repository tests!',
        },
        {
            type: 'input',
            name: 'qusername',
            message: 'Enter your Github Username!',
        },
        {
            type: 'input',
            name: 'qemail',
            message: 'Enter your email!',
        },
    ]);
};;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptReadme();

