var className = "bg-header";
var scrollTrigger = 1;
var x = document.querySelector(".nav");

window.onscroll = function() {
  // Verificar el ancho de la ventana
  if (window.innerWidth >= 1024) {
    // Si es mayor o igual a 1024px, cambiar el background a transparente
    x.style.backgroundColor = "transparent";
  } else {
    // Si es menor a 1024px, mantener el background original
    x.style.backgroundColor = ""; // Esto restablecerá el background a su valor por defecto
  }

  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.scrollY >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

function myFunction() {
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    document.getElementsByTagName("header")[0].classList.add(className);
  }
}