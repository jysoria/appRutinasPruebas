const botones = document.querySelectorAll('nav a');
const pantallas = document.querySelectorAll('.pantalla');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const pantalla = boton.getAttribute('data-pantalla');
    botones.forEach(boton => {
      boton.classList.remove('activo');
    });
    boton.classList.add('activo');
    pantallas.forEach(pantalla => {
      pantalla.style.display = 'none';
    });
    document.querySelector(`.pantalla.${pantalla}`).style.display = 'block';
  });
});
