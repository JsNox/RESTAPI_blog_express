const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/articleController");

// Rutas de prueba desde el controlador
router.get("/ruta-de-prueba", ArticleController.prueba);
router.get("/alumnosprueba", ArticleController.alumnos);
// Rutas utiles
router.post("/crear", ArticleController.crear);
router.get("/articulos", ArticleController.listar);
router.get("/articulo/:id", ArticleController.articleUniqe);
router.put("/actualizar/:id", ArticleController.actualizar);
router.delete("/borrar/:id", ArticleController.borrar);



module.exports = router;