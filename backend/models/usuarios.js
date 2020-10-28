const pool = require("./../utils/bd");
const T_USUARIOS = "usuarios";
const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, obj])
    .then((result) => result)
    .catch((e) => e);

module.exports = { create };
