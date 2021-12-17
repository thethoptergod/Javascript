// Promises
// special JS object
// links producing code with consuming code

let promise = new Promise(function(resolve, reject){
    // executor (producing code)
    setTimeout(()=> resolve("done"), 2000)
})
promise.then((message)=>console.log(message));
console.log(promise)
// resolve - if job is finised succesfully,
// rusult is value

// reject(error) if error has occured, returns "error" as error object
let promise = new Promise(function(resolve, reject){
    setTimeout
})
