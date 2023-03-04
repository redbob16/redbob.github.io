// an array is basically a list of objects
// arrays are a type of "data structure",
// which are constructs that hold data.

// arrays can be created with square brackets
let emptyArray = []; // more can be added later

let numberArray = [27, 7, 2, 2929, 45]; // length of 5

let stringArray = 
    ["appel", "orange", "grapes", "pear"]; // length of 4

let mixedArray = ["cat", 2, 5, "dog", "platypus", 12, [2, 3]]; // length of 7

let groceryList = [
    "bacon",
    "eggs",
    "coffee",
    "cheese",
    "fruits and veggies",
    "pastromi"
];
console.log(groceryList);

// accessing data from an array also uses square brackets
// and, we use a number caleed "index" to specify
// which element in the array we want to get.
// HOWEVER, indices start counting at 0!

let firstGroceryItem = groceryList[0]; // bacon
    console.log(firstGroceryItem);

let ThirdGroceryItem = groceryList[2]; // coffee
    console.log(ThirdGroceryItem);

let lastGroceryItem = groceryList[5]; // pastromi
    console.log(lastGroceryItem);

// we can add items to an existing array
// one way of doing that is using the push method

console.log(groceryList);
groceryList.push("ice cream");
console.log(groceryList);

// START OF DYNAMIC GROCERY LIST

const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemSubmit");

function displayList() {
    pageList.innerHTML = groceryList
        .toString()
        .replaceAll(",", "<br>");
}
displayList();

itemSubmit.addEventListener("click", function(e) {
    let newItem = itemInput.value;
    itemInput.value = ""
    groceryList.push(newItem);
    displayList();
});