const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/articleController");

// Rutas de prueba desde el controlador
router.get("/ruta-de-prueba", ArticleController.prueba);
router.get("/alumnosprueba", ArticleController.alumnos);
// Rutas utiles
router.post("/crear", ArticleController.crear);

module.exports = router;