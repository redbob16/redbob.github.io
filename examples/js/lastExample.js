const flexBox2 = document.getElementById("flexBox2")
const flexBox3 = document.getElementById("flexBox3")
const grid = document.getElementById("grid")
const heroLink = document.getElementById("heroLink")
const flexboxGridLink = 
    document.getElementById("flexboxGridLink")
const gridLink = document.getElementById("gridLink")

function hideAll() {
    flexBox2.style.display = "none";
    flexBox3.style.display = "none";
    grid.style.display = "none";
}
hideAll();

function showHero() {
    hideAll();
    flexBox2.style.display = "";
}
heroLink.onclick = showHero

function showFlexboxGrid() {
    hideAll();
    flexBox3.style.display = "";
}
flexboxGridLink.onclick = showFlexboxGrid;

function showGrid() {
    hideAll();
    grid.style.display = "";
}
gridLink.onclick = showGrid;