const express = require("express");
const router = express.Router();
const multer = require("multer"); // npm i multer
const config = { dest: `./public/tmp` };
const upload = multer(config);
const { imgFile } = require("./../../utils/fileHandler");
const create = (req, res) => {
  console.log(req.file);
  imgFile(req.file);
};

// .single o .array()
router.post("/create", upload.single("imagen"), create); // request -> file : {}
module.exports = router;
