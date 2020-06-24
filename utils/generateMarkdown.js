// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

## Installation

## Usage

## Contributing

## Tests

`;
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
