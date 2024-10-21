# INSERCIONES-HTML

## Descripción del Proyecto

**INSERCIONES-HTML** es un proyecto web interactivo que proporciona una guía detallada sobre cómo incrustar diferentes tipos de contenido multimedia en HTML, incluyendo audio, video, mapas, canvas y H5P. Este proyecto está diseñado para ser responsivo y funcional.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

1. **Páginas HTML**:
 
    - **H5P**: Descripción de H5P como herramienta para crear contenido interactivo, incluyendo un ejemplo de un quiz de geografía.
    - **Canvas**: Descripción de Canvas, canvas es un elemento de HTML5 que permite dibujar gráficos y animaciones en una página web usando JavaScript, ideal para crear visualizaciones interactivas.
    - **Api google maps**: Descripcion de la Api de google maps, La API de Google Maps permite integrar mapas interactivos en sitios web, ofreciendo funcionalidades como marcadores, rutas y capas personalizadas mediante JavaScript.
    - **Inserción de Audios**: Información sobre la inserción de archivos de audio en HTML, con ejemplos de uso y ventajas.
    - **Inserción de Videos**:  Informacion sobre la insercion de archivos de video en HTML, con ejemplos de uso y ventajas. 

2. **JavaScript**: Un script que gestiona la carga de contenido dinámico en un iframe mediante botones de navegación para diferentes tipos de contenido.


   ```javascript
   document.getElementById('loadAudio').addEventListener('click', () => {
       loadContent('Contents/audio.html');
   });

   function loadContent(file) {
       const iframe = document.getElementById('content');
       iframe.src = file;

       iframe.onload = function () {
           iframe.style.height = '45vh'; // Ajusta la altura del iframe
       };
   }

3. **CSS**: Estilos generales que utilizan Flexbox para una disposición responsiva y estética del contenido.

4. **Estructura del Proyecto**: Contenido separado en directorios para facilitar su mantenimiento y reutilización.

## Funcionalidades

- **Carga Dinámica**: El contenido de cada sección se carga sin recargar la página, lo que mejora la experiencia del usuario.
- **Reproductores Multimedia**: Se incluyen reproductores integrados para archivos de audio y video, con controles para facilitar la interacción.
- **Interactividad**: La integración de H5P permite crear contenido educativo interactivo.
- **Uso de la Api de Google Maps**: La API de Google Maps permite integrar mapas interactivos en sitios web, ofreciendo funcionalidades como marcadores, rutas y capas personalizadas mediante JavaScript.
- **Responsividad**: El diseño se adapta a diferentes tamaños de pantalla, asegurando una experiencia óptima en dispositivos móviles y de escritorio.

## Requisitos

Abre el archivo `index.html` en tu navegador para empezar a explorar.

## Contribuciones

Este proyecto es un ejercicio de clase que me ha ayudado a practicar y a aprender no solo de cada uno de sus puntos, si no tambien a la hora de la creaciónn de una estructura HTML, CSS y JS, 