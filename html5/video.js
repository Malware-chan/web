window.addEventListener('load', init, false);

function init() {
    vid = document.getElementById('vid');
    playPause = document.getElementById('play');
    progressBar = document.getElementById('progress-bar');
    currentProgress = document.getElementById('current-progress');

    playPause.addEventListener('click', play, false);
    progressBar.addEventListener('click', skipTo, false);
}

function play() {
    if ( !(vid.paused) && !(vid.ended) ) {
        vid.pause();
        playPause.innerHTML="Play";
    }
    else {
        vid.play();
        playPause.innerHTML="Stop";
        loop = setInterval(progress, 50);
    }
}

function progress() {
    if (!vid.ended) {
        let total = parseInt(vid.currentTime * maxProgress / vid.duration);
        currentProgress.style.width = total+'px';
    }
}

function skipTo() {
    if ( !(vid.paused) && !(vid.ended) ) {
        let clickX = event.pageX - currentProgress.offsetLeft;
        let jumpTo = clickX * vid.duration / maxProgress;
        vid.currentTime = jumpTo;
        progressBar.style.width = jumpTo+'px';
    }
}

let vid;
let playPause;
let progressBar;
let currentProgress;
// Ancho de la barra de progreso definido en CSS
let maxProgress = 650;




/*
He adaptado el código en fichero JS para que la barra no tenga un valor fijo sino que sea relativo. Es decir, si decides cargar un vídeo con una anchura superior a 700px, o inferior, la barra se ajustará automáticamente. Por tanto el barra.style.width = unvalor+"%";  También he considerado la aportación que ha realizado Takanga a este video y he incluido el recálculo de la posición de la barra con dos alternativas: desde una posición absoluta con event.pageX, según tu vídeo y con una posición relativa desde event.offsetX. En la línea final he dejado comentada la segunda opción. Para cambiar entre las opciones solo hay que descomentar la opcion2 y comentar la línea anterior para que se ejecute de un modo u otro.

Asunciones:
1. mivideo se llama video17 puesto que como voy haciendo todos tus ejercicios, para localizarlos en un futuro, uso el número del vídeo en el que empezaste el ejercicio.
2. Mi botón de play (boton-reproducir y boton-barra en mi caso son ambos <button>, puesto que como mi punto débil (aún) es CSS3, al ser ambos <button> conseguía enmarcarlos de un modo más fácil que si combinaba los <button> dentro de <div> por el recálculo de los padding y margin. boton-progreso si es un <div>.

Código JavaScript:

// JavaScript Document
// Origin: index17.html
'use strict';

//1. Declaración de Objetos y Variables
var video17,
    botonReproducir,
    botonBarra,
    botonProgreso,
    tiempoActualVideo,
    tiempoTotalVideo,
    porcentajeVideo;

// Extracción de los elementos de HTML
video17 = document.getElementById('video17');
botonReproducir = document.getElementById('boton-reproducir');
botonBarra = document.getElementById('boton-barra');
botonProgreso = document.getElementById('boton-progreso');


//2. Declaración de Funciones
function estadoVideo() {
  if (video17.ended == false) {
    // Variables para cálculo del porcentaje de Tiempo
    tiempoActualVideo = video17.currentTime;
    tiempoTotalVideo = video17.duration;
    porcentajeVideo = parseInt((tiempoActualVideo/tiempoTotalVideo)*100);
    botonProgreso.style.width=porcentajeVideo+"%";
  }
}
// Reproducción del vídeo.
function playVideo() {
  var progresoBarra;
  if ((video17.paused == false) && (video17.ended == false)) {
    video17.pause();
    botonReproducir.innerHTML="Play";
  }
  else {
    video17.play();
    botonReproducir.innerHTML="Pause";
    estadoVideo();
    progresoBarra = setInterval(estadoVideo, 50);
  }
}

//Función para adelantar o retrasar el punto de reproducción del vídeo en función de la parte proporcional de la barra en la que pulse el usuario desde una posición absoluta de la página
function cambiandoVideo(evento) {
  var ratonX,
      inicioBarra,
      recorridoBarra,
      tamanyoBarra,
      porcentajeBarra;

// Defino el tamaño máximo de la barra contenedora. Gracias Takanga.
  tamanyoBarra = botonBarra.offsetWidth;

  if ((video17.paused == false) && (video17.ended == false)) {
//Defino la posición y el porcentaje de barra recorrido desde la posición absoluta de la página con evento.pageX.
    ratonX = evento.pageX;
    inicioBarra = botonBarra.offsetLeft;
    recorridoBarra = parseInt(ratonX - inicioBarra);
    porcentajeBarra = parseInt((recorridoBarra/tamanyoBarra)*100);

    video17.currentTime = parseInt((porcentajeBarra/100)*video17.duration);
    botonProgreso.style.width = porcentajeBarra+"%";
  }
}

//Función para adelantar o retrasar el punto de reproducción del viíeo en función de la parte proporcional de la barra en la que pulse el usuario desde una posición relativa del elemento parent.
function cambiandoVideoOpcion2(evento) {
  var ratonX,
      inicioBarra,
      recorridoBarra,
      tamanyoBarra,
      porcentajeBarra;

// Defino el tamaño máximo de la barra contenedora. Gracias Takanga
  tamanyoBarra = botonBarra.offsetWidth;

  if ((video17.paused == false) && (video17.ended == false)) {
//Defino la posición y el porcentaje de barra recorrido desde la posición relativa del elemento parent del evento desencadenado al pulsar el ratón.
    ratonX = evento.offsetX; // Gracias Takanga.
    inicioBarra = botonBarra.offsetLeft;
    recorridoBarra = parseInt(ratonX);
    porcentajeBarra = parseInt((recorridoBarra/tamanyoBarra)*100);

    video17.currentTime = parseInt((porcentajeBarra/100)*video17.duration);
    botonProgreso.style.width = porcentajeBarra+"%";
  }
}

//Ejecuto el código de la página
function cargaDocumento() {
  botonReproducir.addEventListener("click", playVideo, false);
  botonBarra.addEventListener("click", cambiandoVideo, false);
  // Comento la opción 2. En caso de querer usarla se comenta la línea anterior y se descomenta la línea de abajo.
  // botonBarra.addEventListener("click", cambiandoVideoOpcion2, false);
}


//3. Asignación de Eventos
// Forzamos la ejecución de la página una vez se haya cargado todo el código.
window.addEventListener('load', cargaDocumento);
*/
