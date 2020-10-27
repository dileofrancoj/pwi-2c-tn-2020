const pool = require("./../utils/bd");
const T_CATEGORIAS = "categorias";

const get = async (conditions = true) => {
  const query = "select * from ?? where ? and habilitado = true";
  // SELECT * from categorias where true;
  const params = [T_CATEGORIAS, conditions];
  return await pool.query(query, params);
};

const insert = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [T_CATEGORIAS, obj];
  return await pool.query(query, params); // {insertId : 2}
};
const modify = () => {};
module.exports = { get, insert, modify };
