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
          titulo: 'Caminata lateral en sentadilla',
          imagen: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Mini-Band-Lateral-Walks_600x600.png?v=1656406023',
          descripcion: '<b> 30 reps de lado a lado. </b> <br> Camina de lado a lado casi abajo en Squat. Usa las bandas de resistencia para aumentar tensión en glúteos.\n'
        },
        {
          titulo: 'Squat',
          imagen: 'https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Medicine-Ball-Squat_600x600.png?v=1655223652',
          descripcion: '<b> 15 reps, 3 segundos en pausa. </b> <br> Baja con la espalda recta, quédate 3 segundos abajo, y sube cargando el peso con tus talones. La mancuerna o peso extra lo puedes cargar de distintas maneras, con brazos abajo, arriba… elige como mejor te acomodes.'
        },
        // Agrega más ejercicios para el día 1 de la semana 1
      ],
      dia2: [
        {
          titulo: 'Ejercicio 1/2',
          imagen: 'ejercicio3.jpg',
          descripcion: '<b> </b> <br>'
        },
        // Agrega más ejercicios para el día 2 de la semana 1
      ],
      // Agrega más días de la semana 1 si es necesario
    },
    semana2: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    semana3: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    semana4: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    semana5: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    semana6: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    semana7: {
      // Agrega los ejercicios para la semana 2 de manera similar a la semana 1
    },
    semana8: {
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