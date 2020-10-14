var express = require("express");
var router = express.Router();

/* GET users listing. */
const users = [
  {
    id: 1,
    nombre: "Virginia",
    apellido: "Sacudato",
    edad: 17,
    nacionalidad: "Argentina",
  },
  {
    id: 2,
    nombre: "Narella",
    apellido: "Sordi",
    edad: 24,
    nacionalidad: "Italiana",
  },
  {
    id: 3,
    nombre: "Sebastian",
    apellido: "Minotti",
    edad: 41,
    nacionalidad: "Argentina",
  },
];

const list = (req, res) => {
  res.render("users", { users });
  // res.json(users)
};

const single = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  res.render("user", { user });
};

router.get("/list", list);
router.get("/single/:id", single); // 1 2 pure
// router.get("/list/paginate/:start/:end", paginate);
module.exports = router;
