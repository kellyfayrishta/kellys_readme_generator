// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "title",
    message: "What is your project name?",
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project: ",
  },

  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false,
  },

  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have? (Use arrow keys)",
    choices: ["MIT", "GPL", "CC--0", "None"],
  },

  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },

  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },

  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: console.log("Success!"),
      });
    });
  });
};

// TODO: Create a function to initialize app

function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app

init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
    return writeToFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
