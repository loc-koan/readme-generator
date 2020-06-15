/* function to generate markdown for README */
function generateMarkdown(userAnswers) {
    return 
    `# ${userAnswers.repoTitle}

    ## Description:
    ${userAnswers.repoDescription}

    ## Table of Contents:
    * [Description] (#Description)
    * [Table of Contents] (#Table of Contents)
    * [Installation] (#Installation)
    * [Usage] (#Usage)
    * [License] (#License)
    * [Contributing] (#Contributing)
    * [Tests] (#Tests)
    * [Questions] (#Questions)

    ## Installation:
    ${userAnswers.repoInstallation}

    ## Usage:
    ${userAnswers.repoUsage}

    ## License:
    ${userAnswers.repoLicense}

    ## Contributing:
    ${userAnswers.repoContribution}

    ## Tests:
    ${userAnswers.repoTesting}

    ## Questions:
    If you have any questions, I can be reached at ${userAnswers.repoGithub} or ${userAnswers.repoEmail}
    `;

}
/* exports this file to be used by the index file */
module.exports = generateMarkdown;
