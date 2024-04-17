#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n Welcome to SADAF MANNAN WORD-COUNTER\n"));
function counter(paragraph) {
    let freeWhitespace = paragraph.replace(/\s/g, '');
    return freeWhitespace.length;
}
async function StartWordCount(counter) {
    do {
        let response = await inquirer.prompt([{
                type: "input",
                name: "paragraph",
                message: "write  paragraph here ...."
            }]);
        console.log(counter(response.paragraph));
    } while (true);
}
StartWordCount(counter);
