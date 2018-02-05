var _ = require('lodash');

var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#random");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

function setLinearGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function setRandomLinearGradient() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setLinearGradient();
}

window.onload = setLinearGradient;
// body.addEventListener("load", setLinearGradient);
random.addEventListener("click", setRandomLinearGradient);

color1.addEventListener("input", setLinearGradient);

color2.addEventListener("input", setLinearGradient);
