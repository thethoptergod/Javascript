const bronx = document.getElementById("bronx")
const brooklyn = document.getElementById("brooklyn")
const manhattan = document.getElementById("manhattan")
const queens = document.getElementById("queens")
const staten = document.getElementById("staten")
let input = 10

let a = input
let text="<ul>"
let textBronx = text
let textBrooklyn = text
let textManhattan =text
let textQueens = text
let textStaten = text

if(0 < a < 10){
    a = input
}
else{
    a = 10
}
bronx.addEventListener("click", () => {
    textBronx = textBronx + "</ul>"
    document.getElementById("content").innerHTML = textBronx
    console.log(textBronx)
})
const urlBronx = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
    fetch(urlBronx)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsbronx = data
            let i = 0
            while (i < a) {
                console.log(complaintsbronx[i].descriptor)
                textBronx=textBronx + `<li>${complaintsbronx[i].descriptor}</li>`;
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
        })
brooklyn.addEventListener("click", () => {
    textBrooklyn = textBrooklyn + "</ul>"
    document.getElementById("content").innerHTML = textBrooklyn
    console.log(textBrooklyn)
})
const urlBrooklyn = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN`
    fetch(urlBrooklyn)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsBrooklyn = data
            let i = 0
            while (i < a) {
                console.log(complaintsBrooklyn[i].descriptor)
                textBrooklyn=textBrooklyn + `<li>${complaintsBrooklyn[i].descriptor}</li>`;
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
manhattan.addEventListener("click", () => {
    textManhattan = textManhattan + "</ul>"
    document.getElementById("content").innerHTML = textManhattan
    console.log(textManhattan)
})
const urlManhattan = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
    fetch(urlManhattan)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsManhattan = data
            let i = 0
            while (i < a) {
                console.log(complaintsManhattan[i].descriptor)
                textManhattan=textManhattan + `<li>${complaintsManhattan[i].descriptor}</li>`;
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
queens.addEventListener("click", () => {
    textQueens = textQueens + "</ul>"
    document.getElementById("content").innerHTML = textQueens
    console.log(textQueens)
})
const urlQueens = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`
    fetch(urlQueens)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsQueens = data
            let i = 0
            while (i < a) {
                console.log(complaintsQueens[i].descriptor)
                textQueens=textQueens + `<li>${complaintsQueens[i].descriptor}</li>`;
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
staten.addEventListener("click", () => {
    textStaten = textStaten + "</ul>"
    document.getElementById("content").innerHTML = textStaten
    console.log(textStaten)
})
const urlStaten = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN%20ISLAND`
    fetch(urlStaten)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsStaten = data
            let i = 0
            while (i < a) {
                console.log(complaintsStaten[i].descriptor)
                textStaten=textStaten + `<li>${complaintsStaten[i].descriptor}</li>`;
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
console.log(input)
// console.log(text)