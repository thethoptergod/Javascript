let prompt = require('prompt-sync')()
let prompt2 = require('prompt-sync')()
let string = prompt ("Enter statment: ")
let search = prompt2 ("Enter statment to count (WARNING: CASE SENSITIVE!): ")
let searchedfor
let enteredstring = new RegExp (search, "g")
let searchfor = string.match(enteredstring)
searchfor===null ? searchedfor=0:searchedfor=searchfor.length;
console.log(searchedfor)