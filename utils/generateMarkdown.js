// function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![${answers.license} License](https://img.shields.io/badge/license-${answers.license}-green)

This project is licensed under the ${answers.license} License.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact [${answers.username}](https://github.com/${answers.username}) or email at ${answers.email}.
`; 

;
}

module.exports = generateMarkdown;
