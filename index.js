// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the file name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description for your project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What what problem does your project solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn from this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation requirements?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for use?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Pleae name all collaborators',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'What is the license?',
    },
];

const getUserInfo = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => err ? console.log(err) : console.log('touchdown'));
}

// TODO: Create a function to initialize app
const init = () => {
    getUserInfo()
        .then((answers) =>{
            const readMeInfo = generateMarkdown(answers);
            writeToFile('README.md',readMeInfo)
        })
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));       
}

// Function call to initialize app
init();
