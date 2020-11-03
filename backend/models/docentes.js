const pool = require("./../utils/bd"); // referencia de la conexión :D
const T_DOCENTES = "docentes";
const T_DOCENTE_IMAGENES = "docente_imagenes";
const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_DOCENTES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_DOCENTE_IMAGENES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

module.exports = { create, createImages };
