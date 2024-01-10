<br/>
<p align="center">
  <h1 align="center">Sistema de Gestión de Productos en Node.js
</h1>
  <p align="center"> Este repositorio contiene el código fuente de una aplicación de gestión de eventos y usuarios desarrollada en Node.js. 
    La aplicación utiliza archivos JSON para almacenar datos de eventos y usuarios, y se implementa una estructura de gestión de datos modular para facilitar la expansión y el mantenimiento.
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
  Carpeta clase6/data/memory
  <br/>
</h3>
<p>
  Esta carpeta contiene implementaciones de "managers" en memoria para gestionar eventos (events.memory.js) y usuarios (users.memory.js). 
Estos managers proporcionan métodos para crear, leer, actualizar y eliminar datos, manteniendo la persistencia a través de archivos JSON.
</p>

<h3>
  Carpeta clase6/test
</h3>
<p>
  Aquí encontrarás casos de prueba utilizando Jest para garantizar el correcto funcionamiento de los "managers" de eventos y usuarios.
</p>
<h3>
  Carpeta /server.js
</h3>
<p>
  El archivo server.js inicializa un servidor Express que expone una API REST para interactuar con los eventos y usuarios. 
Utiliza los managers de memoria mencionados anteriormente.
</p>
<h3>
  Carpeta /test/server.test.js
</h3>
<p>
  Este archivo contiene pruebas de integración utilizando Jest y Supertest para asegurar que la API REST funcione como se espera.
</p>
<br/>
<h3>
  Funcionalidades CRUD:
</h3>
<br/>Crear: Agregar nuevos productos al sistema.
<br/>Leer: Obtener detalles de un producto específico o todos los productos.
<br/>Actualizar: Modificar la información de un producto existente.
<br/>Eliminar: Eliminar productos del sistema.

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
  <br/>Clona este repositorio: git clone [https://github.com/Schenvz/Backend-CH-24/](https://github.com/Schenvz/Backend-CH-24/tree/main)
  <br/>Instala las dependencias: npm install
  <br/>Inicia el servidor: npm start
  <br/>Ejecuta las pruebas: npm test
  <br/>¡Diviértete explorando y extendiendo la funcionalidad de la aplicación!
</p>






