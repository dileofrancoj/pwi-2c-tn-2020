// middleware comprobacion del schema
// Entidad
const { schemas } = require("./../schemas/Users");

const validateLogin = (req, res, next) => {
  const { error, value } = schemas.auth.validate(req.body); // error, value
  console.log(error);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateLogin };
