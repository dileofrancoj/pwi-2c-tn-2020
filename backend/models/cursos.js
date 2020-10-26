const pool = require("./../utils/bd"); // referencia de la conexión :D
const T_CURSOS = "cursos";
const T_CATEGORIAS = "categorias";
const get = async () => {
  const query =
    "SELECT idCategoria, cu.nombre, cu.id, cat.nombre as nombreCategoria  FROM ?? as cu JOIN ?? as cat on cu.idCategoria = cat.id where cu.habilitado = ?";
  const params = [T_CURSOS, T_CATEGORIAS, true];
  return await pool.query(query, params);
};
const single = async (id) => {
  const query =
    "SELECT idCategoria, cu.nombre, cu.id, cat.nombre as nombreCategoria  FROM ?? as cu JOIN ?? as cat on cu.idCategoria = cat.id where cu.habilitado = ? and cu.id = ?";
  const params = [T_CURSOS, T_CATEGORIAS, true, id];
  return await pool.query(query, params);
};

module.exports = { get, single };
