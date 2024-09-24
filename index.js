// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        name: 'license',
        choices: ['MIT', 'GNU',],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response);

            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();

