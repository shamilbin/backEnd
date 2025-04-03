import read from "readline-sync";
console.clear();
let name = read.question("\n\nEnter your name  :");

let age = read.question("enter your age :");

console.log(`\n\nYour age is :${age}`);
console.log(`Your name is  : ${name}`);
