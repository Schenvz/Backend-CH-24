import {Router} from "express";
import usersRouter from "./user.router.api.js";
import eventsRouter from "../views/events.router.views.js";

const apiRouter = Router()

apiRouter.use("/users",usersRouter)
apiRouter.use("/events",eventsRouter)

export default apiRouter

//corregir ante errores
//k
