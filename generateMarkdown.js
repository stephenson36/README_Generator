// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-brightgreen`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data,license) {
  if(license === "") {
    return "";
 } else {
  link = renderLicenseLink(data.license);
  badge = renderLicenseBadge(data.license);
  return `## License
  ![badge representing license](${badge})
  This application is covered under the ${link} license`
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseSection = renderLicenseSection(data,data.license);

  return `# ${data.title}

## Description

${data.description}

- Motivation: ${data.motivation}
- Problem Solved: ${data.problem}
- Learnings: ${data.learn}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.credits}

${licenseSection}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
