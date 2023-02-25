// console.log will output anything
// you put in parentheses
// to the Chrome Developer Tools' Console

// Data Type: String (Text)
console.log("Hello World!");

// Data Type: Number
console.log(4);
console.log(10000);

// Math operator
// addition (+), subtraction (-)
// multiplication (*), division (/)
console.log(10 + 5);
console.log(20 - 12);
console.log(3 * 4);
console.log(10 / 2);

// String operator
// concatenenation (+) (putting two Strings together)
console.log("Hello" + "World" + 64);

// Data Type: Boolean (true/false)
console.log(true);
console.log(false);

// Boolean operators
// equivalence (==) (is equal to)
console.log(10 == 10); // true
console.log(10 == 5); // false

// not equivanlent (!=) (is not equal to)
console.log(5 != 15); //true
console.log(5 != 5); // false

// less then (<)
console.log(5 < 10); // true
console.log(10 < 5); //false
console.log(5 < 5); // false

// greater then (>)
console.log(5 > 10); // false
console.log(10 > 5); // true
console.log(5 > 5); //false

// greater then or equal to (>=)
// less then or equal to (<=)
console.log(5 >= 10); // false
console.log(10 >= 5); // true
console.log(5 >= 5); // true

// Boolean data types allow us to
// write branching code paths
let a = 5;
let b = 10;
if (a != b) {
    console.log("This statement is true!");
 } else {
    console.log("This statement is false!");
}