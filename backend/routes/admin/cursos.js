const express = require("express");
const router = express.Router();
const model = require("./../../models/cursos");
const { get: getCategorias } = require("./../../models/categorias");
const all = async (req, res) => {
  try {
    const cursos = await model.get();
    const categorias = await getCategorias();
    res.render("admincursos", { cursos: cursos, categorias: categorias });
  } catch (e) {
    // res.sendStatus(500)
    console.log(e);
    //res.render('error')
  }
};

const create = async (req, res) =>
  model
    .create(req.body)
    .then((response) => res.redirect("/admin/cursos/all"))
    .catch((e) => res.render("error"));

// localhost:3000/admin/cursos/all
router.get("/all", all);
router.post("/create", create);
module.exports = router;
