let result = document.getElementById("result");

function displayTwoPlusTwo() {
    const number1 = 2;
    const number2 = 2;
    result.innerHTML = number1 + number2;
}

// displayTwoPlusTwo();

function displayThreeTimesFour() {
    result.innerHTML = 3 * 4;
}

function displayFourMinusSix() {
    result.innerHTML = 4 - 6;
}

function displayOnePlusEight() {
    result.innerHTML = 1 + 1;
}

function displayFiveMinusFour() {
    result.innerHTML = 5 - 4;
}

function displaySixMinusTwo() {
    result.innerHTML = 6 - 2;
}

function displaySevenTimesSix() {
    result.innerHTML = 7 * 6;
}

function displayEightPlusEight() {
    result.innerHTML = 8 + 8;
}

function displayMultiply() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) * parseInt(input2.value);
}

function displayAddition() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

function displaySubtraction() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    result.innerHTML = parseInt(input1.value) - parseInt(input2.value);
}