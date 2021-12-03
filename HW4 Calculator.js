let prompt = require('prompt-sync')()
let prompt2 = require('prompt-sync')()
let prompt3 = require('prompt-sync')()
console.log("Welcome to the Calculator!")
console.log('Here are your possible operations!')
console.log('1. Add')
console.log('2. Subtract')
console.log('3. Multiply')
console.log('4. Divide')
console.log('5. Exponentiate')
console.log('6. Exit')
let enterednum1 = prompt ("Enter first number: ")
let enterednum2 = prompt2 ("Enter second number: ")
let operation = prompt3("Enter Operation number: ")
let operation1 = Number(operation)
let num1 = Number(enterednum1)
let num2 = Number(enterednum2)
switch(operation1)
{
    case (1):
    console.log(num1 + "+" + num2 + '=' + (num1 + num2))
    break;
    case (2):
    console.log(num1 + "-" + num2 + '=' + (num1 - num2))
    break;
    case (3):
    console.log(num1 + "*" + num2 + '=' + (num1 * num2))
    break;
    case (4):
    console.log(num1 + "/" + num2 + '=' + (num1 / num2))
    console.log(num1 + "/" + num2 + '=' + (Math.floor(num1 / num2)) + ' Remainder:' + (num1 % num2))
    break;
    case (5):
    console.log(num1 + "^" + num2 + '=' + (num1 ** num2))
    break;
    default:
        console.log("ERROR, You messed up, try another!")
}    
