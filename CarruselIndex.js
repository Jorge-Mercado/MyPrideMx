let animacion = document.querySelectorAll("#carruselAnimado");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animacion.length; i++) {
    let altura = animacion[i].offsetTop;
    if (altura - 300 < scrollTop) {
      animacion[i].style.opacity = 1;
      animacion[i].classList.add("mostrarArriba");
    }
  }
}

window.addEventListener('scroll', mostrarScroll);