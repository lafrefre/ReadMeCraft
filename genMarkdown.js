function generateMarkdown(data)
    return `
    # ${data.ProjectTitle}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    This project is licensed under ${data.license} license.
    
    ## Contributing
    ${data.contribution}
    
    ##Questions
    If you have any questions, please contact me at ${data.github}.
    ';
    }
    
    module.exports = generateMarkdown;