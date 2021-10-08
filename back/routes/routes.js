const express = require("express"); // cargar express
const carController = require("../controllers/Car.controller");
const router = express.Router(); // configuración de las rutas

const alquilerController =
  require("../controllers/Alquiler.controller").default;
// se utiliza API REST
// post: crear, get:leer/obtener datos , put:actualizar , delete: eliminar .

//------------------------------------------------------------------
//-----   Cars routes  (para catálogo de carros)  ----------------

router.get("/cars", carController.getAll); // consultar todos
router.get("/cars/:code", carController.getByCode); // consultar uno por código
router.post("/cars", carController.create); // crear un carro
router.put("/cars/:code", carController.update); // actualizar uno en abse a código
router.delete("/cars/:code", carController.delete); // borrar uno en abse a código

//--------Alquiler routes (Formulario de alquiler)-------------------------------------------------
router.post("/alquiler", alquilerController.create);

// exportar las rutas
module.exports = router;
