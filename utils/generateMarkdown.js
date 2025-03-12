/** @format */

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (value === "AGPL") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
  } else if (value === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (value === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else {
    badge = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value === "AGPL") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(getAnswers) {
  return `
  # Project Title
  ${getAnswers.title}
  ![License](https://img.shields.io/badge/license-${getAnswers.license}-brightgreen)<br />

  # Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
      
  # Description
  ${getAnswers.description}
  
  # Installation
  ${getAnswers.install}
  
  # Usage
  ${getAnswers.usage}
  
  # License 
  This application is covered by the ${getAnswers.license} license.  

  # Contributing 
  ${getAnswers.contributing}
  
  # Tests
  ${getAnswers.test}
  
  # Questions
  * GitHub Username: ${getAnswers.username}
  * Contact Email: ${getAnswers.email}
  
  `;
}

export default generateMarkdown;
