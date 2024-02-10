import propsEventsUtils from "../utils/propsEvents.utils.js";

function propsEvents(req, res, next) {
  try {
    propsEventsUtils(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
}

export default propsEvents;
