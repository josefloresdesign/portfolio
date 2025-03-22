let nav = document.querySelector(".nav");
let iconmenu = document.querySelector("#icon-menu");

function openNav() {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    iconmenu.src = "./assets/close.svg";
  } else {
    nav.classList.add("hidden");
    iconmenu.src = "./assets/menu.svg";
  }
}