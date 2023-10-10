// TODO: Include packages needed for this application
 const inquirer=require("inquirer") 
 const fs=require("fs")
 const generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is your description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what is your installation ',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is your usage',

    },
    {
        type: 'list',
        name: 'License',
        message: 'what is your license',
        choices: ["MIT", "IBM", "APACHE"]

    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'who is your contributors'

    },
    {
        type: 'input',
        name: 'Tests',
        message: 'how do you test',

    },
    {
        type: 'input',
        name: 'Email',
        message: 'what is your Email?',
    },
    {
        type: 'input',
        name: 'Username',
        message: 'what is your username?',
    },







];

// TODO: Create a function to write README file 
function writeToFile(fileName, data) {
fs.writeFileSync(fileName,generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();
