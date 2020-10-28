const express = require("express");
const router = express.Router();
const { register } = require("./../services/registro");
const showView = (req, res) => res.render("registro");
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

router.get("/", showView);
router.post("/create", create);
// http://localhost:3000/registro/verify/5b7ffede-abc7-4699-8039-c4b72e925454
module.exports = router;
