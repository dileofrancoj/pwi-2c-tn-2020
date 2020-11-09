const express = require("express");
const router = express.Router();
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);
const service = require("./../../services/docentes");
const create = async (asd, res) => {
  console.log(req.file);
  const idFile = await service.createDocente(req.body, req.file);
  res.redirect("/admin/docentes/create");
};

// .single o .array()

router.get("/create", (req, res) => res.render("admindocentes"));
router.post("/create", upload.single("imagen"), create); // request -> file : {}
module.exports = router;
