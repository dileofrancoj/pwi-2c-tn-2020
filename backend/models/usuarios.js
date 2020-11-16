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

// REGISTRO
// update({habilitado : 1}, confirmacionCorreo = 'cc0cdb0e-3562-49b7-a48d-d0dc8bf7c780')

// MODIFICAR LOS DATOS DESDE EL PANEL (id)
// update({usuario, password}, id=1)

// default : undefined
const update = ({ uid, id, data }) =>
  pool
    .query("UPDATE ?? SET ? WHERE confirmacionCorreo = ? OR id = ?", [
      T_USUARIOS,
      obj,
      uid,
      id,
    ])
    .then((result) => result)
    .catch((e) => e);
/*

const updateID = ({uid, id, data}) =>
pool
  .query("UPDATE ?? SET ? WHERE confirmacionCorreo = ? OR id = ?", [
    T_USUARIOS,
    obj,
    uid,
    id,
  ])
  .then((result) => result)
  .catch((e) => e);
*/
module.exports = { create, auth, update };
