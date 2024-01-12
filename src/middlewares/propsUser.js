function propsUser(req, res, next) {
    const { name, photo, email } = req.body;
    if (!name || !photo || !email) {
      const error = new Error(`name & photo & email are required`);
      error.statusCode = 404;
      throw error;
    } else {
      return next();
    }
  }
  

  export default propsUser;