const max = 50;

for(let i = 0; i < max; i++) {
    document.body.innerHTML += "<div class='follower'></div>"
}

let positions = [];
function storePosition(x, y) {
    positions.unshift([x, y]);
    if (positions.length > max) {
        positions.pop();
    }
}

// storePosition(24, 622);
// console.log(positions);

function getPosition(i) {
    let adjustedIndex = i;
    const maxIndex = positions.length - 1;
    if (i > maxIndex) {
        adjustedIndex = maxIndex;
    }
    return positions [adjustedIndex];
}

function placeFollowers() {
    const followers = document.getElementsByClassName("follower");
    for (let i = 0; i < followers.length; i++) {
        let follower = followers[i];
        let position = getPosition(i);
        follower.style.left = position[0] + "px";
        follower.style.top = position[1] + "px";
    }
}

document.addEventListener("mousemove", function(e) {
    let x = e.pageX - 25;
    let y = e.pageY - 25;
    storePosition(x, y);
    placeFollowers();
});