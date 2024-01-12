import { Router } from "express";
import usersRouter from "./users.router.js";
import productsRouter from "./products.router.js";
import ordersRouter from "./orders.router.js";

const apiRouter = Router()

//definir los enrutadores de los recursos
apiRouter.use("/users",usersRouter)
apiRouter.use("/products",productsRouter)
apiRouter.use("/orders",ordersRouter)

export default apiRouter