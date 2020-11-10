const authAdmin = (req, res, next) => {
  req.session.idUser
    ? ((req.id = req.session.idUser), next())
    : res.redirect("/login");
};

module.exports = { authAdmin };
