// the DOM (Document Object Model)
// is the representation of your web page
// (including the HTML and CSS) in Javascript

// This will get us a JS reference to the
// HTML element with the specificed ID
// (remember, JS is case-sensitive)
let body = document.getElementById("myBodyElement");

// The dot (.) operator lets us look inside
// whatever is on the left side
// to try to access whatever is on the right.

// 'style' happens to be a property inside
// HTML elements 



// (so 'background-color' becomes 'backgroundColor')
body.style.backgroundColor = "blue";






body.innerHTML = "<h1>Hello World!</h1>"

// We can also append HTML to 'innerHTML'
body.innerHTML = 
    body.innerHTML +
    "<p id='myParagraph'>This was written dynamic JS!</p>";

// The += operator is equivalent to the code above
body.innerHTML += "<p>Here's another paragraph</p>";

// We can also get JS references to HTML elements
// that we added dynamically
let myParagraph = document.getElementById("myParagraph");
myParagraph.style.color = "red";
myParagraph.style.fontWeight = "bold";
myParagraph.style.fontSize = "60px";

// we can combine what we learned today to build
// a very simple 'light/dark' mode for our page
let isDarkMode = true;
if (isDarkMode) {
    body.style.backgroundColor = "#333333";
    body.style.color = "white";
} else {
    body.style.backgroundColor = "white";
    body.style.color = "#333333";
}