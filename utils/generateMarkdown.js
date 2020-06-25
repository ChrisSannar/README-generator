// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License: ${data.licence}](https://img.shields.io/badge/License-${data.licence}-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

${data.description}

## Table of Contents

* [Intallation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${renderLicense(data.licence)}

## Contributing

${data.contrib}

## Tests

${data.tests}

## Questions

If you have any questions, open an issue or contact me via github: [${data.github}](https://www.github.com/${data.github}) or email: ${data.email}

`;
}

function renderLicense(licence) {
  if (licence === 'None') {
    return '';
  } else {
    return `## License

${licence}`
  }
}

/*
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
*/

/***
{
    title: 'test',
    description: 'tested',
    install: 'npm install',
    usage: 'npm start',
    licence: 'GLP',
    contrib: 'Duders',
    tests: 'npm test'
}
*/

module.exports = generateMarkdown;
