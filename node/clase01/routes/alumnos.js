const express = require("express");
// VERBOS HTTP -> GET, POST, PUT , DELETE
const router = express.Router(); // Detectar verbos http
const profe = {
  nombre: "Franco Di Leo",
};
const alumnos = [
  {
    id: 1,
    nombre: "Fran",
    apellido: "Di Leo",
    edad: 26,
  },
  {
    id: 2,
    nombre: "Pablo",
    apellido: "Banfi",
    edad: 39,
  },
];
router.get("/", (req, res) => {
  res.render("alumnos", {
    alumnos: alumnos,
    profe: profe,
    curso: "Programador web inicial",
  });
});

module.exports = router;
