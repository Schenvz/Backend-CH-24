import express from "express";
import morgan from "morgan";
import router from "./routes.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

const server = express()
const PORT = 8080
const ready = ()=>console.log("server ready on port" +PORT);
server.listen(PORT,ready)

//middlewares
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(new URL('public', import.meta.url).pathname));
server.use(morgan("dev"))
server.use("./routes.js",router)
server.use(errorHandler)
server.use(pathHandler)

//k

