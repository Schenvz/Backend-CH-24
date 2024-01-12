import { Router } from "express";
import { GestorUsuarios } from "../../data/fs/users.fs";
const usersRouter = Router();

const gestorUsuarios = new GestorUsuarios("./usuarios.json"); // Instanciando la clase

usersRouter.use("/:uid", async (req, res, next) => {
  try {
    const { uid } = req.params;
    const one = await gestorUsuarios.leerUno(uid); // Usando la instancia para leer el usuario
    if (!one) {
      return res.render("notFound", { not: "user" });
    }
    return res.render("profile", { profile: one });
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
