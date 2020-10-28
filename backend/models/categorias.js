const pool = require("./../utils/bd");
const T_CATEGORIAS = "categorias";

/*
const get = async (conditions = true) => {
  try {
    const query = "select * from ?? where ? and habilitado = true";
    // SELECT * from categorias where true;
    const params = [T_CATEGORIAS, conditions];
    return await pool.query(query, params);

  } catch (e) {
    return e
  }
};
 */

const get = (conditions = true) =>
  pool
    .query("SELECT * FROM ?? WHERE ? and habilitado = true", [
      T_CATEGORIAS,
      conditions,
    ])
    .then((result) => result)
    .catch((e) => e);
const insert = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [T_CATEGORIAS, obj];
  return await pool.query(query, params); // {insertId : 2}
};
const modify = () => {};
module.exports = { get, insert, modify };
