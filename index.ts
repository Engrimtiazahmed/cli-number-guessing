#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    massage: "Please guess a number between 1-10:",
  },
]);

if (answer.userGuessNumber === randomNumber) {
  console.log("Congratulations you guess right Number");
} else {
  console.log("You guess rong Number");
}
