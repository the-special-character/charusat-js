const validateMiddleware = (schema) => (req, res, next) => {
  const validationResult = schema.safeParse(req.body);

  if (!validationResult.success) {
    const errors = validationResult.error.errors;
    return res.status(400).send(errors);
  }

  next();
};

module.exports = validateMiddleware;
