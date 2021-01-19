// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateReadme = require("./utils/generateMarkdown.js")
const fs = require("fs")


// TODO: Create an array of questions for user input
function promptReadme (){
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
            name: 'license',
            message: 'What license would you like for this project?',
            choices: ['Apache_2.0', 'GNU_GPLv3', 'MIT', 'BSD_2-Clause "Simplified"', 'BSD_3-Clause "New"', 'Boost_Software_1.0', 'Creative_Commons_Zero_v1.0', 'Eclipse_Public_2.0', 'GNU_AGPLv3', 'GNU_GPLv2', 'GNU_LGPLv2.1', 'Mozzila_Public_2.0', 'The_Unilicense',]
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
    ])
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    promptReadme()
        .then(answers => {
            const fileContent = generateReadme(answers);
            return fs.writeFile('./README.md', fileContent, err => {
                if (err) {
                    console.log(err)
                }
        })
    })
}

// Function call to initialize app
init() 


