/** @format */

// Packages
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

// Prompts for getAnswers
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "install",
    message: "Enter instructions:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "How is this application being used?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide guidelines for contributions to the application:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "test",
    message: "Provide testing instructions for this application:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "list",
    name: "license",
    message: "Select license used for this project:",
    choices: ["AGPL", "GNU", "Apache", "Boost", "MIT"],
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Valid answer is required");
      }
      return true;
    },
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("README.md file has been generated")
    });
}

// Function to write new README.md file & initialize app
async function init() {
  try {
    // Prompt Inquirer questions
    const getAnswers = await inquirer.prompt(questions);
    console.log(getAnswers);

    // Pass Inquirer getAnswers to generateMarkdown
    console.log("Generating your README...");
    const markdown = generateMarkdown(getAnswers);
    console.log(markdown);

    // Write markdown to dist directory
    writeToFile("./dist/TestREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// Function call to initialize app
init();
