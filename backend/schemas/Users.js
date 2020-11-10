const Joi = require("@hapi/joi");

const schemas = {
  auth: Joi.object().keys({
    usuario: Joi.string().required(),
    password: Joi.string().min(2).max(20).required(),
  }),
};

module.exports = { schemas };
