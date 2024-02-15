// Variables globales
let canciones = [
    {
        nombre: "Frankie Ruiz - La Cura",
        artista: "Frankie Ruiz",
        archivo: "C:/Users/USER/Desktop/git/reproductor/assets/Frankie Ruiz - La Cura.mp3", // Ruta local al archivo de audio
        duracion: "3:45",
        genero: "Salsa",
        caratula: "C:/Users/USER/Desktop/git/reproductor/assets/cratula.jpg" // URL de la carátula de la canción
    },
    {
        nombre: "Fresto Music - Me Hace Daño Verte",
        artista: "Fresto Music",
        archivo: "C:/Users/USER/Desktop/git/reproductor/assets/Fresto Music - Me Hace Daño Verte.mp3",
        duracion: "5:00",
        genero: "Salsa",
        caratula: "C:/Users/USER/Desktop/git/reproductor/assets/cratula.jpg" 
    },
    
];

let cancionActual = null; // Variable para almacenar la canción actualmente seleccionada

function buscarCancion() {
    const inputBusqueda = document.getElementById('buscar-cancion').value.toLowerCase();
    const resultados = canciones.filter(cancion => 
        cancion.nombre.toLowerCase().includes(inputBusqueda) ||
        cancion.artista.toLowerCase().includes(inputBusqueda) ||
        cancion.genero.toLowerCase().includes(inputBusqueda)
    );
    mostrarListaReproduccion(resultados);
}
function agregar() {
    const inputBusqueda = document.getElementById('agregar-cancion').value.toLowerCase();
    const resultados = canciones.filter(cancion => 
        cancion.nombre.toLowerCase().includes(inputBusqueda) ||
        cancion.artista.toLowerCase().includes(inputBusqueda) ||
        cancion.genero.toLowerCase().includes(inputBusqueda)
    );
    mostrarListaReproduccion(resultados);
}
function mostrarListaFavoritos(lista) {
    const listaReproduccion = document.getElementById('lista-favorito');
    listaReproduccion.innerHTML = '';
    lista.forEach(cancion => {
        listaReproduccion.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${cancion.nombre}</h5>
                    <p class="card-text">${cancion.artista}</p>
                    <p class="card-text">${cancion.duracion}</p>
                    <p class="card-text">${cancion.genero}</p>
                    <button class="btn btn-primary" onclick="reproducir('${cancion.archivo}', '${cancion.caratula}')">Reproducir</button>
                </div>
            </div>
        `;
    });
}
// Función para mostrar la lista de reproducción
function mostrarListaReproduccion(lista) {
    const listaReproduccion = document.getElementById('lista-reproduccion');
    listaReproduccion.innerHTML = '';
    lista.forEach(cancion => {
        listaReproduccion.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${cancion.nombre}</h5>
                    <p class="card-text">${cancion.artista}</p>
                    <p class="card-text">${cancion.duracion}</p>
                    <p class="card-text">${cancion.genero}</p>
                    <button class="btn btn-primary" onclick="reproducir('${cancion.archivo}', '${cancion.caratula}')">Reproducir</button>
                </div>
            </div>
        `;
    });
}

// Función para controlar la reproducción
function reproducir(src, caratula) {
    const reproductorAudio = document.getElementById('reproductor-audio').addEventListener('click', alternarReproduccion);
    const caratulaCancion = document.getElementById('caratula-cancion');
    

    reproductorAudio.src = src;
    reproductorAudio.play();
    caratulaCancion.src = caratula;

    // Actualizar la canción actual
    cancionActual = canciones.find(cancion => cancion.archivo === src);
    mostrarDetallesCancion(cancionActual);
}

function pausar() {
    const reproductorAudio = document.getElementById('reproductor-audio').addEventListener('click', pause);
    reproductorAudio.pause();
}

function adelantar() {
    const reproductorAudio = document.getElementById('reproductor-audio');
    reproductorAudio.currentTime += 10; // Avanzar 10 segundos
}

function retroceder() {
    const reproductorAudio = document.getElementById('reproductor-audio');
    reproductorAudio.currentTime -= 10; // Retroceder 10 segundos
}

function mutear() {
    const reproductorAudio = document.getElementById('reproductor-audio').addEventListener('click', muted);
    reproductorAudio.muted = !reproductorAudio.muted;
}
function agregar() {
    const reproductorAudio = document.getElementById('reproductor-audio').addEventListener('click', mostrarListaFavoritos);
    reproductorAudio.add = !reproductorAudio.add;
}
// Mostrar los detalles de la canción seleccionada
function mostrarDetallesCancion(cancion) {
    const detallesCancion = document.getElementById('detalles-cancion');
    detallesCancion.innerHTML = `
        <h5>${cancion.nombre}</h5>
        <p>Artista: ${cancion.artista}</p>
        <p>Duración: ${cancion.duracion}</p>
        <p>Género: ${cancion.genero}</p>
    `;
}

// Mostrar la lista de reproducción al cargar la página
window.onload = function() {
    mostrarListaReproduccion(canciones);
};

// Función para alternar entre reproducción y pausa
function alternarReproduccion() {
    const reproductorAudio = document.getElementById('reproductor-audio');
    const botonReproduccion = document.getElementById('boton-reproduccion');

    if (reproductorAudio.paused) {
        reproductorAudio.play();
        botonReproduccion.classList.remove('fa-play');
        botonReproduccion.classList.add('fa-pause');
    } else {
        reproductorAudio.pause();
        botonReproduccion.classList.remove('fa-pause');
        botonReproduccion.classList.add('fa-play');
    }
}

// Función para borrar una canción
function borrar() {
    // Implementación de la función para borrar una canción
}
