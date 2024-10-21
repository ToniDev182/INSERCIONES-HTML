document.getElementById('loadAudio').addEventListener('click', () => {
    loadContent('Contents/audio.html');
});

document.getElementById('loadCanvas').addEventListener('click', () => {
    loadContent('Contents/Canvas.html');
});

document.getElementById('loadH5P').addEventListener('click', () => {
    loadContent('Contents/H5P.html');
});

document.getElementById('loadMap').addEventListener('click', () => {
    loadContent('Contents/Mapas.html');
});

document.getElementById('loadVideo').addEventListener('click', () => {
    loadContent('Contents/video.html');
});

function loadContent(file) {
    const iframe = document.getElementById('content');

    // Cambia el src del iframe
    iframe.src = file;

    // Cambia la altura del iframe después de un pequeño retraso para permitir que el contenido se cargue
    iframe.onload = function () {
        iframe.style.height = '45vh'; // Altura mayor para adaptarse al contenido
    };
}