let lightboxContainer = 
    document.getElementById("lightboxContainer");
let lightboxBackground =
    document.getElementById("lightboxBackground");
let lightbox =
    document.getElementById("lightbox");
let lightboxCloser =
    document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

let coffeeImage = document.getElementById("coffeeImage");
    coffeeImage.onclick = openLightbox;

let meOutside = document.getElementById("me");
    meOutside.onclick = openLightbox;

let rainbowBackground = document.getElementById("rainbowBackground");
    rainbowBackground.onclick = openLightbox;

let wNRS = document.getElementById("wNRS");
    wNRS.onclick = openLightbox;

let theUnfedMind = document.getElementById("theUnfedMind");
    theUnfedMind.onclick = openLightbox;

let coffeeLetTwo = document.getElementById("coffeeLetTwo");
    coffeeLetTwo.onclick = openLightbox;

let coffeeLiveThree = document.getElementById("coffeeLiveThree");
    coffeeLiveThree.onclick = openLightbox;

let coffeeLifeFour = document.getElementById("coffeeLifeFour");
    coffeeLifeFour.onclick = openLightbox;

let coffeePieOne = document.getElementById("coffeePieOne");
    coffeePieOne.onclick = openLightbox;

let coffeePoofTwo = document.getElementById("coffeePoofTwo");
    coffeePoofTwo.onclick = openLightbox;

let coffeePlayThree = document.getElementById("coffeePlayThree");
    coffeePlayThree.onclick = openLightbox;

let coffeePollyFour = document.getElementById("coffeePollyFour");
    coffeePollyFour.onclick = openLightbox;

let coffeeSideOne = document.getElementById("coffeeSideOne");
    coffeeSideOne.onclick = openLightbox;

let coffeeSaddleTwo = document.getElementById("coffeeSaddleTwo");
    coffeeSaddleTwo.onclick = openLightbox;

let coffeeSoupThree = document.getElementById("coffeeSoupThree");
    coffeeSoupThree.onclick = openLightbox;


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;