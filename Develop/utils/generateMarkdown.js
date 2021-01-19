
// TODO: Create a function to generate markdown for README
function generateReadme(answers) { 
  return `# ${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-green.svg)
  ## Description
  ${answers.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-green.svg)

  This project is licensed under ${answers.license}. More information about this license can be found on [Choosealicense.com](https://choosealicense.com/).
  ## Contributors
  ${answers.contributors}
  ## Tests
  ${answers.test}
  ## Questions
  Thank you for taking the time to properly study this README. If you have any questions, please reach out to me either on my [Github profile](https://github.com/${answers.qusername}) or by [email.](mailto:${answers.qemail})
`;
}

module.exports = generateReadme;
