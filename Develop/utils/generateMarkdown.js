// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty tableOfContents


function renderLicenseBadge(license) {
  if(license) {
    let firstWord = license.split(" ");
    return `<img src="https://img.shields.io/badge/license-${firstWord[0]}-brightgreen" alt="badge for license ${license}">`
  } else {
    return "";
  }
}
const licenses ={
  "Academic Free License v3.0": "afl-3.0",
  "Apache license 2.0": "apache-2.0",
  "Artistic license 2.0": "artistic-2.0",
  "Boost Software License 1.0": "bsl-1.0",
  "BSD 2-clause \"Simplified\" license": "bsd-2-clause",
  "BSD 3-clause \"New\" or \"Revised\" license": "bsd-3-clause",
  "BSD 3-clause Clear license": "bsd-3-clause-clear",
  "Creative Commons license family": "cc",
  "Creative Commons Zero v1.0 Universal": "cc0-1.0",
  "Creative Commons Attribution 4.0": "cc-by-4.0",
  "Creative Commons Attribution Share Alike 4.0": "cc-by-sa-4.0",
  "Do What The F*ck You Want To Public License": "wtfpl",
  "Educational Community License v2.0": "ecl-2.0",
  "Eclipse Public License 1.0": "epl-1.0",
  "Eclipse Public License 2.0": "epl-2.0",
  "European Union Public License 1.1": "eupl-1.1",
  "GNU Affero General Public License v3.0": "agpl-3.0",
  "GNU General Public License family": "gpl",
  "GNU General Public License v2.0": "gpl-2.0",
  "GNU General Public License v3.0": "gpl-3.0",
  "GNU Lesser General Public License family": "lgpl",
  "GNU Lesser General Public License v2.1": "lgpl-2.1",
  "GNU Lesser General Public License v3.0": "lgpl-3.0",
  "ISC": "isc",
  "LaTeX Project Public License v1.3c": "lppl-1.3c",
  "Microsoft Public License": "ms-pl",
  "MIT": "mit",
  "Mozilla Public License 2.0": "mpl-2.0",
  "Open Software License 3.0": "osl-3.0",
  "PostgreSQL License": "postgresql",
  "SIL Open Font License 1.1": "ofl-1.1",
  "University of Illinois/NCSA Open Source License": "ncsa",
  "The Unlicense": "unlicense",
  "zLib License": "zlib"
}

//https://www.thequantizer.com/javascript-json-get-value-by-key/
function renderLicenseLink(license) {
  if(license) {
    let licenseLink = licenses[license];
    return "https://choosealicense.com/licenses/" + licenseLink;
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty tableOfContents
function renderLicenseSection(license) {
  
}

//  Create a function to generate markdown for README
function generateMarkdown(responses) {
   //generate table of contents (let me know if this should be in a seperate function)
  let tableOfContents = ``;
  //generates the main text of readme
  let mainText = ``;
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    license,
    color,
    tests,
    questions,
  } = responses;
  if(!title) {
    title = "Untitled";
  }
  
  tableOfContents += `# ${title} ${renderLicenseBadge(license)}\n`;
  tableOfContents += `## Table of Contents\n`;
  
  if (description) {
    tableOfContents += `* [Description](#description)\n`;
    mainText += `## Description\n <a name="description"></a>\n`
    mainText += `${description}\n`;
  }
  if (installation) {
    tableOfContents += `* [Installation](#installation)\n`;
    mainText += `## Installation\n <a name="installation"></a>\n`
    mainText += `${installation}\n`;
  } if (usage) {
    tableOfContents += `* [Usage](#usage)\n`;
    mainText += `## Usage\n <a name="usage"></a>\n`
    mainText +=  `${usage}\n`;
  }
  if (contributing) {
    tableOfContents += `* [Contributing](#contributing)\n`;
    mainText += `## Contributing\n <a name="contributing"></a>\n`
    mainText += `${contributing}\n`;
  }
  if (license) {
    tableOfContents += `* [License](#license)\n`;
    mainText += `## License\n <a name="license"></a>\n`
    mainText += `<a href="${renderLicenseLink(license)}">${license}</a>\n`;
  }
  if (tests) {
    tableOfContents += `* [Tests](#tests)\n`;
    mainText += `## Tests\n <a name="tests"></a>\n`
    mainText += `${tests}\n`;
  }
  if (questions) {
    tableOfContents += `* [Questions](#questions)\n`;
    mainText += `## Questions\n <a name="questions"></a>\n`
    mainText += `Have Questions? submit an issue to my github: `;
    mainText += `<a href="https://www.github.com/${questions}">https://github.com/${questions}</a>\n`
  }
  return tableOfContents + mainText;
}

module.exports = generateMarkdown;
