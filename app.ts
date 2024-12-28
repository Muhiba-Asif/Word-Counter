import inquirer from "inquirer";



const answers: {
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type: "input",
        message:"ENTER YOUR SENTENCE TO COUNT THE WORD:"
    }
])

const word =answers.sentence.trim().split(" ");
console.log(word);

console.log(`your sentence word count is ${word.length}`);