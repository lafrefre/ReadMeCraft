// the file sym mod for files op
const fs = require('fs');  // the needed fs packages
const inquirer = require('inquirer'); // the needed inquirer packages
// the needed inquirer packages
const genMarkdown = require('./utils/generateMarkdown'); // the needed generateMarkdown packages
const questions = [
    // the questions for the readMe
    {
        type: 'input',
        name: 'ProjectTitle',
        message: 'Enter the title of your project',    
    },
    {
        type: 'imput',
        name: 'description',
        message:'Description of what your is'
    },
    {
        type: 'imput',
        name: 'installation',
        message: 'How to install your project',
    },
    {
        type: 'imput',
        name: 'usage',
        message: 'Enter a detailed description of how to use your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'imput',
        name: 'contribution',
        message: 'Enter the contributing guidelines for your project',
    },
    {
        type: 'imput',
        name: 'test',
        message: 'Enter the test instructions for your project',
    },
    {
        type: 'imput',
        name: 'github',
        message: 'Enter your github username',
    },
]

inquirer
.prompt(questions)
.then((data) => {
    const genMarkdown = genMarkdown(data);

    fs.writeFile('README.md', genMarkdown, (err) => {
        if (err) {
            console.log('Error writing README.md', err);
        } else {
            console.log('README.md created!');

        }
    });
}); 


