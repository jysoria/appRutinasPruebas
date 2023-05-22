var semanas = document.querySelectorAll('.semanas button');
var calendario = document.getElementById('calendario');
var ejerciciosRealizados = 0;
var totalEjercicios = 0;

semanas.forEach(function(semana) {
  semana.addEventListener('click', function() {
    var semanaId = this.id;
    var dias = '';

    for (var i = 1; i <= 7; i++) {
      dias += '<button class="btn btn-light" class="dia" onclick="mostrarEjercicios(' + semanaId + ',' + i + ')">' + i + '</button>';
    }

    calendario.innerHTML = dias;
    calendario.style.display = 'flex';
  });
});

var ejerciciosPorSemanaYDia = {
    semana1: {
      dia1: [
        {
          titulo: 'Ejercicio 1/1',
          imagen: 'ejercicio1.jpg',
          descripcion: 'Descripción del ejercicio 1'
        },
        {
          titulo: 'Ejercicio 2',
          imagen: 'ejercicio2.jpg',
          descripcion: 'Descripción del ejercicio 2'
        },
        // Agrega más ejercicios para el día 1 de la semana 1
      ],
      dia2: [
        {
          titulo: 'Ejercicio 1/2',
          imagen: 'ejercicio3.jpg',
          descripcion: 'Descripción del ejercicio 3'
        },
        // Agrega más ejercicios para el día 2 de la semana 1
      ],
      // Agrega más días de la semana 1 si es necesario
    },
    semana2: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    // Agrega más semanas si es necesario
  };

function mostrarEjercicios(semana, dia) {
  // Aquí puedes cargar los ejercicios correspondientes a la semana y día seleccionados
  // Puedes obtener los datos de una base de datos o utilizar un arreglo predefinido

  var ejercicios = ejerciciosPorSemanaYDia['semana' + semana]['dia' + dia];

  var ejerciciosHtml = '';

  ejercicios.forEach(function(ejercicio) {
    ejerciciosHtml += `
      <div class="tarjeta-ejercicio" class="card">
        <img src="${ejercicio.imagen}" alt="${ejercicio.titulo}" class="card-img-top">
        <div class="card-body">
            <h4>${ejercicio.titulo}</h4>
            <p class="card-text">${ejercicio.descripcion}</p>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck">
                <label class="form-check-label">Terminado <i class="bi bi-emoji-laughing"></i></label>
            </div>
        </div>
      </div>
    `;
  });

  calendario.innerHTML = ejerciciosHtml;
}