/* node js and npm installed needed */
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

/* writes the file */
const writeFileAsync = util.promisify(fs.writeFile);

/* start of questions*/
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'repoTitle',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'repoDescription',
            message: 'Describe this repository/application/project?',
        },
        {
            type: 'input',
            name: 'repoInstallation',
            message: 'Describe the steps needed for installation?',
        },
        {
            type: 'input',
            name: 'repoUsage',
            message: 'Describe how this repository should be utilized?',
        },
        {
            type: 'input',
            name: 'repoLicense',
            message: 'Which license would you like to add?',
            choices: [
                "GNU AGPLv3",
                "Mozilla Public License",
                "Apache License",
                "MIT License",
                "Boost Software License",
                "The Unlicense",
                "None",
            ],
        },
        {
            type: 'input',
            name: 'repoContribution',
            message: 'Enter any contribution instructions or credits.',
        },
        {
            type: 'input',
            name: 'repoTesting',
            message: 'Describe any test instructions.',
        },
        {
            type: 'input',
            name: 'repoGithub',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'repoEmail',
            message: 'What is your email address?',
        },
    ]);
}

/* funtion to initialize program */ 
async function init() {
    try {
        const answers = await promptUser();
        await writeFileAsync('README.md', readMeInfo);

        console.log('Successfully wrote readme file');
    } catch (err) {
        console.log(err);
    }
}

init();