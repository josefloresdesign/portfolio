let nav = document.querySelector(".nav");
let iconmenu = document.querySelector("#icon-menu");


function openNav() {
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
    iconmenu.src="./assets/menu.svg";
  } else {
    nav.style.display = "block";
    iconmenu.src="./assets/close.svg";
  }
}