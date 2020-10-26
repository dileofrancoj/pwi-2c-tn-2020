const mysql = require("mysql");
const util = require("util");

// SELECT * FROM usuarios; // consulta en crudo
// Query builder knex
// ORM Eloquent

let pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || "test",
  connectionLimit: 10,
});
pool.query = util.promisify(pool.query);
module.exports = pool;
