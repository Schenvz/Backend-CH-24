function propsEvents(req, res, next) {
  //si las props obligatorias fuesen enviadas
  //correctamente: dejar pasar
  //sino enviar el error correspondiente
  const { name, place } = req.body;
  if (!name || !place) {
    const error = new Error(`name & place are required`);
    error.statusCode = 404;
    throw error;
  } else {
    return next();
  }
}

export default propsEvents;

//k