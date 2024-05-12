#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt
    ([
        { name: "firstNumber", type: "number", message: "Enter your first number" },
        { name: "secondNumber", type: "number", message: "Enter your second number" },

        {
            name: "operator",
            type: "list",
            choices: ["Addition", "Subtraction", "Multipilication", "Division"],
            message: "select one of the operatos to perform action",
        }]);
//conditional format
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);

}

else if (answer.operator === "Subtraction") { console.log(answer.firstNumber - answer.secondNumber); }

else if (answer.operator === "Multipilication") { console.log(answer.firstNumber * answer.secondNumber); }

else if (answer.operator === "Division") { console.log(answer.firstNumber / answer.secondNumber); }

else { "plese select valid operator" };

console.log( "THE END");