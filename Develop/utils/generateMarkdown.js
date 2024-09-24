// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GNU') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GNU') {
        return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return `This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.`;
    } else if (license === 'GNU') {
        return `This project is licensed under the [GNU](https://www.gnu.org/licenses/gpl-3.0) license.`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   

    ## Description

    ${data.description}

    ${renderLicenseBadge(data.license)}

    ## Table of Contents
        installation [installation](#installation)
        usage [usage](#usage)
        contribution [contribution](#contribution)
        tests [tests](#tests) 
        License [License](#License)
        questions [Questions](#Questions)
        
    
    ## installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## contribution

    ${data.contribution}

    ## tests

    ${data.tests}

    ## License

    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}

    ## Questions

    If you would like to contact me, please use my email or github username: ${data.username}, ${data.email}
`;
}

export default generateMarkdown;
