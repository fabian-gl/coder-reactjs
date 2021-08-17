# SONORA - Tienda de música

E-commerce de instrumentos musicales.

El proyecto se inició con create-react-app


## Levantando el proyecto

Primero debes bajar los archivos a tu disco local (realizando fork y clone)

Una vez que tenas los archivos en tu máquina, para instalar las dependecias en tu entorno local, debes ejecutar

### `npm install`


Luego, desde la terminal, dentro de la carpeta raíz del proyecto ejecutar el script

### `npm start`

Eso ejecuta la app en: [http://localhost:3000](http://localhost:3000) visible desde el navegador.


## Para pasar a producción

### `npm run build`

Genera todos los archivos estáticos en la carpeta "build" y al subir el contenido de la carpeta a un hosting, el proyecto quedará funcionando en la web.


## Dependencias

Se usa react-router-dom para la navegación y facilitar el comportamiento SPA.

Para la persistencia de datos con los productos del store, utilizo firebase/firestore.

Se decide no usar una librería para manejar los estilos, por lo que se usa puro css aplicado a cada componente. Los estilos globales se encuentran en el archivo index.css


## Sonora en funcionamiento

Descargar gif: [Sonora - Tienda de Música](https://github.com/fabian-gl/coder-reactjs/blob/master/gif-funcionamiento/SONORA%20-%20Tienda%20de%20Musica%20-%20Entrega%20Final.gif)
