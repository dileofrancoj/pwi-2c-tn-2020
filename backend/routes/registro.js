const express = require("express");
const router = express.Router();

const showView = (req, res) => res.render("registro");

const create = (req, res) => {
  console.log(req.body);
  // const usuario = req.body;
  const { body: usuario } = req;
  console.log(usuario);
  res.send();
  // req -->
  // validar los datos
  // insertar información correspondiente
  // enviar un correo para verificar el mail
  // res.render() res.json({message : 'Usuario dado de alta, verifica tu correo'})
};

router.get("/", showView);
router.post("/create", create);
module.exports = router;
