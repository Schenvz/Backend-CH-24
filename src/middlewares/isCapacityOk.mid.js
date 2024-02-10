import events from "../data/fs/events.fs.js";

export default (req, res, next) => {
  try {
    const { eid, quantity } = req.params;
    const one = events.readEventById(eid);
    if (one.capacity >= quantity) {
      return next()
    } else {
      const error = new Error("there is no space left");
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    return next(error)
  }
}