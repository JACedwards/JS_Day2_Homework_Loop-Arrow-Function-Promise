//==========Exercise #1 ===========//
console.log("\n\nExercise 1:\n")
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

let name = "Goober"

function favoriteFoods(person3, name){
    for (let i = 0; i<person3['pizza'].length; i++){
        console.log(`One of ${name}'s favorite kinds of pizza is ${person3['pizza'][i]}`)
    };
    console.log(`${name}'s favorite kind of taco is ${person3['tacos']}`);
    console.log(`${name}'s favorite kind of burger is ${person3['burgers']}`);
    for (let i = 0; i<person3['ice_cream'].length; i++){
        console.log(`One of ${name}'s favorite kinds of ice cream is ${person3['ice_cream'][i]}`)
    };
    for (property in person3['shakes'][0]){
        console.log(`One of ${name}'s favorite shakes is ${person3['shakes'][0][property]} from ${property}.`)
    }
    // console.log(`One of ${name}'s favorite shakes is ${Object.values(person3['shakes'][0])}`, `from ${Object.keys(person3['shakes'][0])}.`);

};
favoriteFoods(person3, name)


// ============= ============//
console.log("\n\n\nExercise 2: \n")
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

//===============//

//Craig's Comment:  I am not exactly sure what was being asked for. So, my assumption
//was that the function call for one person was to return their actual age
//and the call for the other person was to return her age + 3 years



class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    addAge = (age) => {
        age = this.age += 3;
        console.log(`${this.name} is ${this.age} years old.`);
    }

    printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}


let eunice = new Person('Eunice', 87);
eunice.printInfo();

let gertrude = new Person('Gertrude', 94);
gertrude.addAge()


// ============= ============//
console.log("\n\n\nExercise 3\n")


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let wordSize = string => {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve(string);
        } else {
            reject(string);
        }
    })
}
wordSize(12).then(() => {console.log(`Small Number'`)}).catch(() => {console.log(`Big Word.`)});