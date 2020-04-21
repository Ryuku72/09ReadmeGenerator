const inquirer = require("inquirer");
const fs = require('fs').promises;
const markdown = require('./utils/generateMarkdown')

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
      name: "email",
      message: "What is your GitHub email address?",
    },
    {
      type: "input",
      name: "folder",
      message: "What is the project folder name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your Readme.Md project?",
    },

    {
      type: "input",
      name: "subheading",
      message: "Can you provide a sub-heading for your project?",
    },

    {
      type: "input",
      name: "date",
      message: "What is the date for this project",
    },

    {
      type: "input",
      name: "aim",
      message: "What is the aim of your project?",
    },

    {
      type: "input",
      name: "concept",
      message: "What are the key concepts used in this project project?",
    },

    {
      type: "checkbox",
      name: "contents",
      message: "Which following content page heading would you like to include",
      choices: ["Build_Process", "Project_Issues", "Installation", "Usuage", "Tests", "Additional_Information"]
    },


    {
      type: "editor",
      name: "build",
      message: "Please write a detailed explanation of the process you used to create your project. Please indicate which key concepts you used and how this assisted you in your task. To exit press 'ESC' and type ':', 'W', 'Q' then 'Enter'",
    },

    {
      type: "editor",
      name: "issues",
      message: "Please enter issues that arose with this project. To exit press 'ESC' and type ':', 'W', 'Q' then 'Enter'",
    },

    {
      type: "input",
      name: "install",
      message: "Can you provide the installation procedure?",
    },

    {
      type: "input",
      name: "use",
      message: "What is your project usuage?",
    },

    {
      ype: "input",
      name: "test",
      message: "What tests have you conducted on your project?",
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
      
    const readMeInformation = markdown(data);

     return fs.writeFile("readmetest.md", readMeInformation);
        })

  .then(() => {

    console.log("Readmetest.Md file has been generated. \nPlease copy file and rename it to Readme.Md if satisfied")

  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompts can't be rendered in the current environment
    } else {
      console.error(error)
    }
    
  });
