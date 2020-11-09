const pool = require("./../utils/bd");
const T_USUARIOS = "usuarios";
const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_USUARIOS, obj])
    .then((result) => result)
    .catch((e) => e);

const auth = ({ usuario, password }) =>
  pool
    .query(
      "SELECT id FROM ?? WHERE usuario = ? and password = ? and habilitado = 1 and eliminado = 0 and role = 1",
      [T_USUARIOS, usuario, password]
    )
    .then((result) => result)
    .catch((e) => e);

module.exports = { create, auth };
