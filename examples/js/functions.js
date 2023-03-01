// variable review
let greeting = "good evening";
console.log (greeting);

// simple function
function greet() {
    console.log(greeting);
}

greet();

//function w input paramiter 
function greetUser(username) {
    let userGreeting = greeting + ", " + username;
    console.log(userGreeting);
}

greetUser("Landon");
greetUser("Erica");
greetUser("Ryan");

// function w input paramiter 
// that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById(greetingDisplay);
    greetingDisplay.innerHTML = greeting + ", " + username;
}

greetUserOnPage("Landon");