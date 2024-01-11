import express from "express";

const router = express.Router();

//ruta para manejar peticiones GET a la raíz
router.get("/", (req, res) => {
  res.send("¡Bienvenido a la página de inicio!");
});

//ruta para manejar peticiones POST a la raíz
router.post("/", (req, res) => {
  res.send("Se ha recibido una solicitud POST en la página de inicio.");
});

//ruta para manejar peticiones a "/api"
router.get("/api", (req, res) => {
  res.json({ mensaje: "Estás en la ruta /api" });
});

export default router;
