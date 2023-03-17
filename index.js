//Appropriate pacakges and files to be used
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions to be used in the file generation
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
            "Boost Software 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU APGL v3",
            "MIT",
            "Mozilla"
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
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    }];

//This function is used to get the appropriate badge information for the selected license
function getBadge(license) {
    if (license === "GNU AGPL v3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license === "GNU GPL v3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "GNU GPL v2") {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    } else if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}


//This function will write the file itself
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

//Initiate function to start the program.
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.badge = getBadge(data.license);
        writeToFile("./dist/README.md", data);
    });
}

// Function call to initialize app
init();
