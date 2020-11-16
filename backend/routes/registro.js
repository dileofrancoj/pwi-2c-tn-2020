const express = require("express");
const router = express.Router();
const { register } = require("./../services/registro");
const showView = (req, res) => res.render("registro");
const model = require("./../models/usuarios");
const create = async (req, res) => {
  try {
    const { body: usuario } = req;
    const id = await register(usuario);
    console.log(id);

    res.render("registro", {
      message: "Usuario registrado, se envío un mail a tu casilla ",
    });
  } catch (e) {
    console.log(e);
  }
};

const verifyEmail = async (req, res) => {
  try {
    // VALIDACION POR FECHAS
    // JWT
    const { uid } = req.query;
    // verificar el token ->
    await model.update({ data: { habilitado: 1 }, uid });
    res.redirect("/login");
  } catch (e) {
    console.error(e);
  }
};

router.get("/", showView);
router.post("/create", create);
router.get("/verify", verifyEmail);
module.exports = router;
