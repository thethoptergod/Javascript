let prompt = require('prompt-sync')()
let string = prompt ("Enter statment: ")
let c = string.length
let i = c-=1
let rev = ""
while(i >= 0){
    rev += string.charAt(i)
    i--;
}
if (rev == string)
{
    console.log('Your statment is a palindrome')
}
else
{
    console.log('Your statment is not a palindrome')
}