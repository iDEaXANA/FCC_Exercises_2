'use strict'
//EXERCISES//
/////////////////// Objects and Functions ///////////////////

let person = {
    name: "Bilal",
    age: 24,
    country: "Algeria"
};

function logData() {
    return person.name + " is " + person.age + " years old and lives in " + person.country
}
console.log(logData())

/////////////////// if Else statemenets ///////////////////
let age = 75

if (age < 6) {
    console.log("Free!")
} else if (age >=6 && age <= 17) { // This can become (age < 18)
    console.log("Child Discount")
} else if (age >=18 && age <= 26) { //(age < 27)
    console.log("Student Discount")
} else if (age >= 27 && age <= 66) { // (age <67)
    console.log ("Full Price")
} else {
    console.log ("Senior Citizen Discount")
}

/////////////////// Loops and Arrays ///////////////////
let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world are:")
for (let i = 0; i < largestCountries.length; i++) {
    console.log("- " + largestCountries[i])
}

/////////////////// shift,unshift,push,pop, ///////////////////
let largestCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largestCountries2.shift()
largestCountries2.unshift("China")
largestCountries2.pop()
largestCountries2.push("Pakistan")

console.log(largestCountries2)

/////////////////// Logical Operators ///////////////////
let dayOfMonth = 18
let month = Math.ceil(Math.random() *12)
let year = 1998
if (month === 6 && dayOfMonth === 18 && year === 1998) {
    console.log("It's my birth month c:")
} else {
    console.log("Not even close")
}
/////////////////// Rock, Paper, Scissors ///////////////////
let hands = ["rock", "paper", "scissor"]

function getHand() {    // Work on more semantic names!!!
    let i = Math.floor(Math.random() * 3)
    console.log(hands[i])
}
getHand()

/////////////////// Using combination of techniques to manipulate an array ///////////////////
let fruit = ["orange", "apple", "orange", "orange", "apple"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
// There are two shelves which are just divs with background colours.
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "orange") {
            orangeShelf.textContent += "Orange" + " "
        } else if (fruit[i] === "apple") {
            appleShelf.textContent += "Apple" + " "
        } else {
            console.log("No such thing exists in this world")
        }
    }
}
sortFruit()



