// Importa Express y otros módulos necesarios
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import morgan from "morgan";
import router from "./routes.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

// Obtiene la ruta y el directorio actual del archivo en ejecución
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from 'path'; // Importa la librería path de Node.js para manejar rutas

const server = express(); // Crea una instancia del servidor Express
const PORT = 8080; // Define el puerto en el que el servidor escuchará las solicitudes

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(morgan("dev"));
server.use(router);

// Routers
import productsRouter from "./src/routers/api/products.router.api.js";
import usersRouter from "./src/routers/api/user.router.api.js";
import ordersRouter from "./src/routers/api/index.router.api.js";

// Monta los enrutadores en las rutas específicas
server.use('/api/products', productsRouter);
server.use('/api/users', usersRouter);
server.use('/api/orders', ordersRouter);

// Error Handler
server.use(errorHandler);
server.use(pathHandler);

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
