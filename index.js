const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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

function generateHTML(answers) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item"><a href="https://linkedin.com/in/${answers.linkedin}">LinkedIn: ${answers.linkedin}</a></li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

async function init() {
    console.log('hi');
    try {
        const answers = await promptUser();

        const html = generateHTML(answers);

        await writeFileAsync('index.html', html);

        console.log('Successfully wrote to index.html');
    } catch (err) {
        console.log(err);
    }
}

init();