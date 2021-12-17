// question 1
// const numArray = [1,3,5,7,9,11,13,15,17,19]
// const sum = numArray.reduce((add , a) => add + a);
// console.log(sum)

// question 2
const stringArray = ["dog","cat","fish","bird","cat"]
let prompt = require("prompt-sync")()
let input = prompt ("Enter String to search for: ")
for (let i = 0; i < stringArray.length; i++) {
    let index = stringArray.indexOf(input);
    if (index >= 0) {
        console.log(input + " is found at " + index)
        break;
    } 
    else {
        console.log(input + " is not found in the array")
        break;
    }
}

// question 3
// const longArray = ["a","is","cat","guitar"]
// const longArrayNum = []
// for (let i = 0; i < longArray.length; i++) {
//     let string = longArray[i];
//     longArrayNum.push(string.length)
// }
// let longest = Math.max(...longArrayNum)
// console.log(longest)

