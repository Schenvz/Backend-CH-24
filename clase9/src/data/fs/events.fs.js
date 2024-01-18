// Importa la clase GestorEventos desde el módulo CommonJS
import GestorEventos from "../../data/fs/events.fs.js";
import { Router } from "express";

const events = new GestorEventos(/* proporciona la ruta necesaria si es necesario */);

const eventsRouter = Router();

eventsRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const response = await events.createEvent(data);
    return res.json({
      statusCode: 201,
      response,
    });
  } catch (error) {
    return next(error);
  }
});

// Detalles de todo
eventsRouter.get("/", async (req, res, next) => {
  try {
    const all = await events.readEvents();
    return res.json({
      statusCode: 200,
      response: all,
    });
  } catch (error) {
    return next(error);
  }
});

// Detalles de uno
eventsRouter.get("/:eid", async (req, res, next) => {
  try {
    const { eid } = req.params;
    const one = await events.readEventById(eid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
});

eventsRouter.put("/:eid/:quantity", async (req, res, next) => {
  try {
    const { eid, quantity } = req.params;
    const response = await events.soldticket(quantity, eid);
    return res.json({
      statusCode: 200,
      response: "capacity available: " + response,
    });
  } catch (error) {
    return next(error);
  }
});

eventsRouter.delete("/:eid", async (req, res, next) => {
  try {
    const { eid } = req.params;
    const response = await events.removeEventById(eid);
    return res.json({
      statusCode: 200,
      response,
    });
  } catch (error) {
    return next(error);
  }
});

export default eventsRouter;
