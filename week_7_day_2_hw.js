//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// console.log(Object.values(Object.values(person3)[4][0])[1])

function favoriteFoods(person) {
    for (let i = 0; i < Object.keys(person).length; i++) {
        let category = Object.keys(person)[i]
        console.log(`My favorite ${category} is/are:`)

        if (Array.isArray(Object.values(person)[i])) {
            for (let j = 0; j < Object.values(person)[i].length; j++) {

                if (typeof(Object.values(person)[i][j]) === 'object'){
                    let sub_category = Object.values(person)[i][j]
                    for (let k = 0; k < Object.values(sub_category).length; k++) {
                        console.log(`\t- ${Object.keys(sub_category)[k]}: ${Object.values(sub_category)[k]}`)
                    }
                    
                } else {
                    console.log(`\t- ${Object.values(person)[i][j]}`)
                }
            }
        } else {
            console.log(`\t- ${Object.values(person)[i]}`)
        }
    }
}
favoriteFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo = () => {
        return `${this.name} is ${this.age} years old`;
    }

    addOne = () => {
        this.age = this.age + 1
        return `${this.name} is now ${this.age} years old`;
    }

    addAge = (years) => {
        return `${this.name} is now ${this.age + years} years old`;
    }
}

let kathy = new Person('Kathy', 29)
let potato = new Person('Potato', 91)
console.log(kathy.printInfo())
console.log(kathy.addAge(3))
console.log(potato.printInfo())
console.log(potato.addOne())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function isGreaterThan10(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(str);
        } else {
            reject(str);
        }
    })
}

isGreaterThan10("La dee la dee doo this is a long string")
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small number")
    })

isGreaterThan10("Merp")
    .then((result) => {
        console.log("Big word")
    })
    .catch((error) => {
        console.log("Small number")
    })

// ============== CodeWars Problem #1 ================ //
// Duplicate Encoder (Previously Done in Python)
// The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string, or ")" if that character appears more
// than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    word_obj = {}
    new_word = ""
    word_lower = word.toLowerCase()
    for (let i = 0; i < word_lower.length; i++) {
        if (word_obj[word_lower[i]] === undefined) {
            word_obj[word_lower[i]] = 1
        } else {
            word_obj[word_lower[i]] += 1
        }
    }
    for (let j = 0; j < word_lower.length; j++) {
        if (word_obj[word_lower[j]] === 1) {
            new_word += "("
        } else {
            new_word += ")"
        }
    } return new_word;
} 

console.log(duplicateEncode("recede"))


// ============== CodeWars Problem #2 ================ //
// Character with longest consecutive repetition -- (Not Solved Before)
// For a given string s find the character c (or C) with longest consecutive repetition and return: [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
// For empty string return: ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as
// Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

function longestRepetition(s) {
    let count = 1
    let max_count = 1
    let letter = s[0]
    if (s === "") {
        return ["", 0]
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            count += 1
        } else if (count > max_count) {
            letter = s[i]
            max_count = count
            count = 1
        } else {
            count = 1
        }
    } return [letter, max_count]
}