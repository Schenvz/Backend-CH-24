<br/>
<p align="center">
  <h1 align="center">Servidor Express con Ejemplos de Middlewares
</h1>
  <p align="center"> Este repositorio contiene el código fuente de un servidor Node.js con Express. 
    La aplicación está estructurada para manejar diversas rutas y utiliza middleware para funcionalidades específicas,     como el manejo de errores y la gestión de rutas personalizadas.
    <br/>
    <br/>
  </p>
</p>
<br/>
<h2>
  Estructura del Proyecto
  <br/>
</h2>
<h3>
  Carpeta /data/memory
  <br/>
</h3>
<p>
  Esta carpeta contiene implementaciones de "managers" en memoria para gestionar eventos (events.memory.js) y usuarios (users.memory.js). 
Estos managers proporcionan métodos para crear, leer, actualizar y eliminar datos, manteniendo la persistencia a través de archivos JSON.
</p>

<h3>
  Carpetas /routes
</h3>
<p>
  RUTAS
</p>
<h3>
  Carpeta /server.js
</h3>
<p>
  Configura y ejecuta un servidor Express con varios middlewares para manejar solicitudes, rutas y errores. 
  Además, utiliza un archivo adicional (router) para gestionar las rutas específicas de la aplicación.
  La funcionalidad exacta puede variar dependiendo del contenido del archivo router y otros archivos relacionados.
  También utiliza los managers de memoria mencionados anteriormente.
</p>
<h3>
  Carpeta middlewares
</h3>
<p>
  Carpeta que almacena middleware, incluyendo errorHandler y pathHandler.
</p>
<br/>
<h3>
  Funcionalidades Principales:
</h3>
  <p>Manejo de Errores:
    Middleware errorHandler que responde con detalles de error y un código de estado personalizado.
  </p>
  <p>
    Manejo de Rutas Personalizadas:
    Middleware pathHandler que responde con un mensaje personalizado para la ruta "/errorHandler".
  </p>
<h3>
  <br/> Requisitos
</h3>
<br/>Node.js
<br/>npm (Gestor de paquetes de Node.js)
<br/>

<p align="center">
  <h2 
    align="center">Instrucciones de Uso
 </h2>
</p>
<p align="center">
  <br/>Instala las dependencias: npm install
  <br/>Inicia el servidor: npm init
  </br>Ejecuta la aplicación con node server.js.
  <br/>¡Diviértete explorando y extendiendo la funcionalidad de la aplicación!
</p>






