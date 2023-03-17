function generateMarkdown(data) {

  return `# ${data.title}
${data.badge}
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.badge}
<br/>
This application is covered by the ${data.license} license. 
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
GitHub: [${data.username}] https://github.com/${data.username}<br/>
<br/>
If you have any questions, please contact me at: ${data.email}<br/><br/>
`;
}

module.exports = generateMarkdown;
