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

greetUser("landon");
greetUser("erica");
greetUser("ryan");

// function w input paramiter 
// that modifies the page
function greetUserOnPage(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + ", " + username;

    // greetingDisplay.innerHTML =
    // greetingDisplay.innerHTML +
    // greeting +
    // ", " +
    // username;
}

greetUserOnPage("ryan");
greetUserOnPage("landon");

// function that outputs (or "returns") a value
function getUserGreeting (username) {
    return greeting + "! " + username + "! how can I help you";
}

getUserGreeting("landon");
console.log(
    getUserGreeting("landon")
);

// function using another function
// that modifies the page
function greetUserOnPageV2(username) {
    let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = getUserGreeting(username);
}

greetUserOnPageV2("landon jay troyer");