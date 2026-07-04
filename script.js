let open = document.querySelector(".sidebar--container--icon");
let menu = document.querySelector(".sidebar--open");
let close = document.querySelector(".sidebar--open-icon");

open.addEventListener("click", function () {
  menu.classList.toggle("close");
});

close.addEventListener("click", function () {
  menu.classList.toggle("close");
});
