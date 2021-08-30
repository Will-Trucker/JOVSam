const fila = document.querySelector('.contCarrusel1');
const pelicula = document.querySelectorAll('.peliculas');

const flechaIzquierda = document.getElementById('Izquierda');
const flechaDerecha = document.getElementById('Derecha');

flechaDerecha.addEventListener('click', () =>{
  fila.scrollLeft += fila.offsetWidth;

  const indicacionActivo = document.querySelector('.indicadores .activo');
  if (indicacionActivo.nextSibling) {
    indicacionActivo.nextSibling.classList.add('activo');
    indicacionActivo.classList.remove('activo');
  }
});
flechaIzquierda.addEventListener('click', () =>{
  fila.scrollLeft -= fila.offsetWidth;

  const indicacionActivo = document.querySelector('.indicadores .activo');
  if (indicacionActivo.previousSibling) {
    indicacionActivo.previousSibling.classList.add('activo');
    indicacionActivo.classList.remove('activo');
  }
});

const numeroPaginas = Math.ceil(pelicula.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement('button');

   if (i === 0) {
    indicador.classList.add('activo');
  }


  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  });
}

pelicula.forEach((peliculas) => {
  peliculas.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      pelicula.forEach(peliculas => peliculas.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
      pelicula.forEach(peliculas => peliculas.classList.remove('hover'));
})
