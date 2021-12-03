let prompt = require('prompt-sync')()
let string = prompt ("Enter statment: ")
let letters;
let numbers;
let lettercount = string.match(/[a-z]/ig)
lettercount===null ? letters=0:letters=lettercount.length;
let numbercount = string.match(/[\d]/g)
numbercount===null ? numbers=0:numbers=numbercount.length;
let specials = (string.length) -= (letters) 
let specials2 = (specials) -= (numbers)
console.log(`There is/are ${letters} of letter/s, there is/are ${numbers} of number/s, and there is/are ${specials2} special character/s`)