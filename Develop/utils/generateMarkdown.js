// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT" || license === "Eclipse Public 2.0") {
    return `![Github License](https://img.shields.io/badge/license-${license}-green.svg)`;
  } else if (license === "") {
    return "";
  } else {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
            ${renderLicenseBadge(data.license)}
            ## Description
            ${data.description}
            ## Table of Contents
            * [Installation](#installation)
            * [Usage](#usage)
            * [License](#license)
            * [Contributors](#contributors)
            * [Tests](#tests)
            * [Questions](#questions)
            
            ## Installation
            ${data.installation}
            ## Usage
            ${data.usage}
            ## License
            ${renderLicenseBadge(data.license)}
            This project is licensed under ${data.license}. More information about this license can be found on [Choosealicense.com](https://choosealicense.com/).
            ## Contributors
            ${data.contributors}
            ## Tests
            ${data.tests}
            ## Questions
            Thank you for taking the time to properly study this README. If you have any questions, please reach out to me either on my [Github profile](https://github.com/${data.qusername}) or by [email.](mailto:${data.qemail})
`;
}

module.exports = generateMarkdown;
