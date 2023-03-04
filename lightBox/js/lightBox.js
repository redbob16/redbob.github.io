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

// let coffeeImage = document.getElementById("coffeeImage");
//     coffeeImage.onclick = openLightbox;

// let meOutside = document.getElementById("me");
//     meOutside.onclick = openLightbox;

// let rainbowBackground = document.getElementById("rainbowBackground");
//     rainbowBackground.onclick = openLightbox;

// let wNRS = document.getElementById("wNRS");
//     wNRS.onclick = openLightbox;

let galleryImages = document.getElementsByClassName("galleryImage");
for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;