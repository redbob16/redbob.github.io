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

function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;

// second image lightbox

let lightboxContainer2 = 
    document.getElementById("lightboxContainer2");
let lightboxBackground2 =
    document.getElementById("lightboxBackground2");
let lightbox2 =
    document.getElementById("lightbox2");
let lightboxCloser2 =
    document.getElementById("lightboxCloser2");

function openLightbox2() {
    lightboxContainer2.classList.add("display");
    lightbox2.src = this.src;
}

let coffeeImage2 = document.getElementById("coffeeImage2");
coffeeImage2.onclick = openLightbox;

function closeLightbox() {
    lightboxContainer2.classList.remove("display");
    lightbox2.src = "";
}

lightboxCloser2.onclick = closeLightbox;
lightboxBackground2.onclick = closeLightbox;