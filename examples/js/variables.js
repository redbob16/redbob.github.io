// variables need to be declared
// before they can be used.
// variable declaration is one
// by using the 'Let' keyword.

debugger;

// a variable assigned a String data type
let greeting = "Good Evening";
console.log(greeting);

// a variable assigned a Number data type
let myNumber = 5;
console.log(myNumber);

// we can change the value assigned to a variable
myNumber = 10;
console.log(myNumber);

// we can also change the data type of a variables
// myNumber = "one thousand";
// console.log(myNumber);

// we can also use operators for variable assignment
let myNewNumber = 5 + 4;
console.log(myNewNumber);

// we can also use variables for variable assignment
let anotherNumber = myNumber + myNewNumber;
console.log(anotherNumber)

// we can even use the same variable
// in its own assignments
anotherNumber = anotherNumber + 5;
console.log(anotherNumber);

// this is a more practical example of how
// variables can be used on a site
let username = "Landon";
let personalizedGreeting = greeting + " " + username;
console.log(personalizedGreeting);
