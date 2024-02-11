const pathHandler = (req, res, next) => {
  const requestedPath = req.path;
  if (requestedPath === "/errorHandler") {
    //envía un mensaje personalizado
    res.status(200).json({ message: "¡Esta es la ruta específica!"});
  } else {
    //sino pasa al siguiente middleware
    next();
  }
};

export default pathHandler;

//k
