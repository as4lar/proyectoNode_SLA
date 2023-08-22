// LINKS IMPORTANTES DE LA APLICACION PRINCIPAL
const express = require("express");
const router = express.Router();

//no es necesario el .hbs en el render
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
