const inquirer = require("inquirer");
const fs = require('fs').promises;

inquirer
  .prompt([{
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "folder",
      message: "What is the project folder name?",
    },
  {
    type: "input",
    name: "email",
    message: "What is your GitHub Email address?",
  },
    {
      type: "input",
      name: "title",
      message: "what is the title of your Readme.Md project?",
    },

    {
      type: "input",
      name: "date",
      message: "what is the date for this project",
    },

    {
      type: "input",
      name: "Introduction",
      message: "can you provide a short introduction summary of your project?",
    },

    {
      type: "checkbox",
      name: "contents",
      message: "which following content page heading would you like to use",
      choices: ["Installation", "Keywords", "Feedback", "Future Additions", "Additional Information", ]
    },

    {
      type: "input",
      name: "installation",
      message: "can you provide the installation procedure?",
    },

    {
      type: "input",
      name: "use",
      message: "can you provide usuages for your project?",
    },

    {
      type: "editor",
      name: "issues",
      message: "Please enter issues that arose with this project. To exit press 'ESC' and type ':', 'W', 'Q' then 'Enter'",
    },

    {
      type: "input",
      name: "licenses",
      message: "Can you provide which licenses you are using?",
    },

    {
      type: "input",
      name: "contributors",
      message: "Who contributed to your project?",
    },

  ]).then(data => {
      const readMeInformation = `
[![GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.folder}?style=for-the-badge)]
[![GitHub pull requests](https://img.shields.io/github/issues-pr/${data.username}/${data.folder}]
[![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.folder}?style=plastic)
# ${data.title} 
${data.date}
${data.Introduction}
  
## ${data.contents}

## Installation
${data.installation}

## Usuage
${data.use}

## Issues
${data.issues}

## Licenses
${data.licenses}

## Contributions
${data.contributors}

### ${data.name} // ${data.username}

      `;

     return fs.writeFile("readmetest.md", readMeInformation);
        })

  .then(() => {

    console.log("Readme.Md file has been generated")

  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompts can't be rendered in the current environment
    } else {
      console.error(error)
    }
    
  });

  

  var shields = require('shields')();
 
  shields('travis', {
    repo: 'KenanY/shields'
  });



// function init() {

// }

// init();
