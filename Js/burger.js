"use strict";

/* Kod inspirerat från w3scools, "Hot TO - Mobile Navigation Menu", https://www.w3schools.com/howto/howto_js_mobile_navbar.asp Hämtad 2022-02-05 */
var x = document.getElementById("myLinks");
var y = document.getElementById("basket-holder");

window.onload = init;
/* Funktion som gömmer både meny-länkar i hamburgarmeny och varukorgen då sidan laddas */
function init() {
    x.style.display = "none";
    y.style.display = "none";
}

/* Funktion som öppnar hamburgarmeny */
function openMenu() {

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
/* Funktion som öppnar varukorgen */
function openCart() {
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
        x.style.display = "none";
    }
}

/*Lightbox2 options: https://lokeshdhakar.com/projects/lightbox2/ */

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'fitImagesInViewport': true
})

/* Detta gör att video kan pausas och spelas upp. Kodsnutt från : https://stackoverflow.com/questions/25840460/how-do-i-use-javascript-to-toggle-play-pause-for-multiple-videos-when-i-click-on*/

let myVideo = document.getElementById("reklamVid");

function playPause() {

    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}