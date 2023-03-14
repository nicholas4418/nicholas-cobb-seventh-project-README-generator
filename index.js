// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
    const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project: ",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of your project: "
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the appropriate license for this project: ",
        choices: [
            "Apache 2.0",
            "Academic",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide a list of all contributing project members: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide all (if any) project test instructions: "
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide instructions for submitting questions: "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    }];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("./dist/README.md, data");
    });
 }

// Function call to initialize app
init();
