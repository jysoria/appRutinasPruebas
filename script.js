// Variables para almacenar el día anterior y el div de ejercicios correspondiente
var diaAnterior = null;
var ejerciciosDiaAnterior = null;

// Obtén una lista de los botones de los días
var botonesDias = document.querySelectorAll('.dias button');

// Itera sobre cada botón y agrega el evento de clic correspondiente
botonesDias.forEach(function(botonDia) {
  botonDia.addEventListener('click', function() {
    // Obtén el ID del botón clicado
    var dia = this.id.replace('btnDia', '');
    
    // Obtén el div de ejercicios correspondiente al día
    var ejerciciosDia = document.getElementById('ejerciciosDia' + dia);
    
    // Oculta el div de ejercicios del día anterior (si existe)
    if (diaAnterior !== null && ejerciciosDiaAnterior !== null) {
      ejerciciosDiaAnterior.style.display = 'none';
    }
    
    // Muestra u oculta el div de ejercicios del día actual
    if (ejerciciosDia.style.display === 'none') {
      ejerciciosDia.style.display = 'block';
    } else {
      ejerciciosDia.style.display = 'none';
    }
    
    // Actualiza la variable del día anterior y el div de ejercicios anterior
    diaAnterior = dia;
    ejerciciosDiaAnterior = ejerciciosDia;
  });
});
