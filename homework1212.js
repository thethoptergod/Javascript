let student1 = {name: "Bobby", gender: "male", activity: "chess"};
let student2 = {name: "Boris", gender: "male", activity: "drumming"};
let student3 = {name: "John", gender: "male", activity: "running"};
let student4 = {name: "Peter", gender: "male", activity: "guitar"};
let student5 = {name: "Geddy", gender: "male", activity: "bass"};
let student6 = {name: "Charles", gender: "male", activity: "swimming"};
const students = [student1,student2,student3,student4,student5,student6]
const iterate = [2,4,6,7,8,"try","cat"]
const mappedIterate = iterate.map(arrayIterate)
const mappedIterate2 = iterate.map(arrayIterate2)
function maxOfThree(){
    document.getElementById("bignum").innerHTML = Math.max(document.getElementById("num1").value,document.getElementById("num2").value,document.getElementById("num3").value);
    }
function celsiusToFahrenheit() {
    document.getElementById("celtofah").innerHTML = (9/5 * document.getElementById("cel").value) + 32;
    }
function fahrenheitToCelsius() {
    document.getElementById("fahtocel").innerHTML = (5/9) * (document.getElementById("fah").value - 32);
    }
function swimFilter(){
    for (let i = 0; i < students.length; i++) {
        if (students[i].activity == "swimming"){
            document.getElementById("swimFilterResult").innerHTML = students[i].name
        }
        else{
        }
    }
}
function actFilter(){
    for (let i = 0; i < students.length; i++) {
        if (students[i].activity == document.getElementById("fil").value){
            document.getElementById("actFilterResult").innerHTML = students[i].name
        }
        else{
        }
        
    }
}
function arrayIterate (element){
    return element
}
function arrayIterate2 (element , index){
    return index
}
function arrayPrint(){
        document.getElementById("iterateResult1").innerHTML = mappedIterate
        return document.getElementById("iterateResult2").innerHTML = mappedIterate2
    };

console.log(mappedIterate)
console.log(mappedIterate2)