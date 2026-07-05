let open = document.querySelector(".sidebar--container--icon");
let menu = document.querySelector(".sidebar--open");
let close = document.querySelector(".sidebar--open-icon");

open.addEventListener("click", function () {
  menu.classList.toggle("close");
});

close.addEventListener("click", function () {
  menu.classList.toggle("close");
});

var button = document.querySelector(".button");
var modal = document.querySelector(".modal");

// Set will-change when the element is hovered
button.addEventListener("focus", hintBrowser, true);
button.addEventListener("blur", hintBrowser, true);

button.addEventListener("click", hintBrowser);
modal.addEventListener("transitionend", removeHint, false);

function hintBrowser() {
  // The optimizable properties that are going to change
  // in the animation's keyframes block
  modal.style.willChange = "clip-path";
  console.log("add will-change");
}

function removeHint() {
  this.style.willChange = "auto";
  console.log("remove will-change");
}
