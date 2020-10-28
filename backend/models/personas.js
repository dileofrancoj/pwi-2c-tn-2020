const pool = require("./../utils/bd");
const T_PERSONAS = "personas";

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PERSONAS, obj])
    .then((response) => response)
    .catch((e) => e);

module.exports = { create };
