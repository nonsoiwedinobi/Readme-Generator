const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// Promisify the fs.writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to run tests:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];



// function to write README file
function writeToFile(fileName, data) {
  return writeFileAsync(fileName, data);
}

// function to initialize program
async function init() {
  try {
    // Prompt the user for input using inquirer
    const answers = await inquirer.prompt(questions);

    // Generate the README content
    const readmeContent = generateMarkdown(answers);

    // Write the content to README.md
    await writeToFile("README.md", readmeContent);

    console.log("README.md has been generated successfully!");
  } catch (error) {
    console.error("Error during initialization:", error);
  }
}

// function call to initialize program
init();
