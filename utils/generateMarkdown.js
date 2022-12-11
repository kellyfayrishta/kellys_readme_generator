const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`
  }
  if (license === "GPL") {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === "CC--0") {
    return `https://creativecommons.org/licenses/by-nd/4.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
  function generateMarkdown (data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#tests)
  - [Questions](#Questions)


  ## Installation

  To install necessary dependencies, run the following command:

    ${data.install}

  ## Usage

    ${data.usage}

  ## License

    ${renderLicenseSection(data.license)}

  ## Contributing

    ${data.contributing}

  ## Tests

  To run tests, run the following command:

    ${data.test}

  ## Questions
  
  If you have any questions about the repo, open and issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}.)
`;
}

module.exports = generateMarkdown;
