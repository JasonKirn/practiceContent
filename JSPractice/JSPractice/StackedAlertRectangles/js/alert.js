var clickedRedRectangle = false
var clickedGreenRectangle = false;

function blueRectangleFunction() {
    if (clickedRedRectangle == false) {
        alert("blue rectangle");   
    }
    clickedRedRectangle = false;
}

function redRectangleFunction() {
    if (clickedGreenRectangle == false) {
        alert("red rectangle");
    }
    clickedRedRectangle = true;
    clickedGreenRectangle = false;
}

function greenRectangleFunction() {
    alert("green rectangle");
    clickedGreenRectangle = true;
}