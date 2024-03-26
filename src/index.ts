// import dependencies
import inquirer from "inquirer";
import clear from "clear";
import questions from "./promptActions.js";
import businessCard from "./businessCard.js";

clear();

console.log(businessCard);

const prompt = inquirer.createPromptModule();
prompt(questions).then((answer) => answer.action());
