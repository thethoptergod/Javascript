const bronx = document.getElementById("bronx")
const brooklyn = document.getElementById("brooklyn")
const manhattan = document.getElementById("manhattan")
const queens = document.getElementById("queens")
const staten = document.getElementById("staten")
const number = document.getElementById("number")
const textBronxArr = []
const textBrooklynArr = []
const textManhattanArr = []
const textQueensArr = []
const textStatenArr = []
const textBronxArr2 = []
const textBrooklynArr2 = []
const textManhattanArr2 = []
const textQueensArr2 = []
const textStatenArr2 = []
let a = 100
bronx.addEventListener("click", () => {
    let textBronx = "<ul>"
    let input = number.value
    let e = 0
    while (e < input){
        textBronx=textBronx + `<li>${textBronxArr2[e].toString()}<button class=minor onclick=bron(${e}) ondblclick=dis()>What did the cops do?</button></li>`
        e++
    }
    textBronx = textBronx + "</ul>"
    document.getElementById("content").innerHTML = textBronx
})
const urlBronx = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
    fetch(urlBronx)
        .then((res)=> res.json())
        .then((data)=> {
            let complaintsbronx = data
            let i = 0
            while (i < a) {
                textBronxArr2.push(complaintsbronx[i].descriptor);
                textBronxArr.push(complaintsbronx[i].resolution_description);
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
function bron (i) {
    return document.getElementById("deets").innerHTML = (textBronxArr[i].toString());
}
brooklyn.addEventListener("click", () => {
    let textBrooklyn = "<ul>"
    let input = number.value
    let e = 0
    while (e < input){
        textBrooklyn=textBrooklyn + `<li>${textBrooklynArr2[e].toString()}<button class=minor onclick=bron(${e}) ondblclick=dis()>What did the cops do?</button></li>`
        e++
    }
    textBrooklyn = textBrooklyn + "</ul>"
    document.getElementById("content").innerHTML = textBrooklyn
})
const urlBrooklyn = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN`
    fetch(urlBrooklyn)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsBrooklyn = data
            let i = 0
            while (i < a) {
                textBrooklynArr2.push(complaintsBrooklyn[i].descriptor);
                textBrooklynArr.push(complaintsBrooklyn[i].resolution_description);
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
function broo (i) {
    return document.getElementById("deets").innerHTML = (textBrooklynArr[i].toString());
}
manhattan.addEventListener("click", () => {
    textManhattan = "<ul>"
    let input = number.value
    let e = 0
    while (e < input){
        textManhattan=textManhattan + `<li>${textManhattanArr2[e].toString()}<button class=minor onclick=bron(${e}) ondblclick=dis()>What did the cops do?</button></li>`
        e++
    }
    textManhattan = textManhattan + "</ul>"
    document.getElementById("content").innerHTML = textManhattan
})
const urlManhattan = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
    fetch(urlManhattan)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsManhattan = data
            let i = 0
            while (i < a){
                textManhattanArr2.push(complaintsManhattan[i].descriptor);
                textManhattanArr.push(complaintsManhattan[i].resolution_description);
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
function manh (i) {
    return document.getElementById("deets").innerHTML = (textManhattanArr[i].toString());
}
queens.addEventListener("click", () => {
    textQueens = "<ul>"
    let input = number.value
    let e = 0
    while (e < input){
        textQueens=textQueens + `<li>${textQueensArr2[e].toString()}<button class=minor onclick=bron(${e}) ondblclick=dis()>What did the cops do?</button></li>`
        e++
    }
    document.getElementById("content").innerHTML = textQueens
    textQueens = textQueens + "</ul>"
})
const urlQueens = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`
    fetch(urlQueens)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsQueens = data
            let i = 0
            while (i < a) {
                textQueensArr2.push(complaintsQueens[i].descriptor);
                textQueensArr.push(complaintsQueens[i].resolution_description);
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
function quee (i) {
    return document.getElementById("deets").innerHTML = (textQueensArr[i].toString());
}
staten.addEventListener("click", () => {
    textStaten = "<ul>"
    let input = number.value
    let e = 0
    while (e < input){
        textStaten=textStaten + `<li>${textStatenArr2[e].toString()}<button class=minor onclick=bron(${e}) ondblclick=dis()>What did the cops do?</button></li>`
        e++
    }
    textStaten = textStaten + "</ul>"
    document.getElementById("content").innerHTML = textStaten
})
const urlStaten = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN%20ISLAND`
    fetch(urlStaten)
        .then((res)=> res.json())//recives response from promise
        .then((data)=> {
            let complaintsStaten = data
            let i = 0
            while (i < a) {
                textStatenArr2.push(complaintsStaten[i].descriptor);
                textStatenArr.push(complaintsStaten[i].resolution_description);
                i++;
            } 
        })
        .catch((error)=> {
            console.log(error)
})
function stat (i) {
    return document.getElementById("deets").innerHTML = (textStatenArr[i].toString());
}
function dis (){
    return document.getElementById("deets").innerHTML = ""
}