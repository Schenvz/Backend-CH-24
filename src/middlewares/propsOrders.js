function propsOrder(req, res, next) {
    const { pid, uid, quantity, state } = req.body;
    if (!pid || !uid || !quantity || !state) {
      const error = new Error(`id produts & id user & quantity & state are required`);
      error.statusCode = 404;
      throw error;
    } else {
      return next();
    }
  }
  

  export default propsOrder;