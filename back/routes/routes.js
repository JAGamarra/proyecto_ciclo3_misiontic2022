const express = require("express"); // cargar express
const carController = require("../controllers/Car.controller");
const userController = require("../controllers/User.controller");
const router = express.Router(); // configuración de las rutas


// se utiliza API REST
// post: crear, get:leer/obtener datos , put:actualizar , delete: eliminar .

//------------------------------------------------------------------
//-----   Cars routes  (para catálogo de carros)  ----------------

router.get("/cars", carController.getAll ); // consultar todos
router.get("/cars/:id" , carController.getById);  // consultar uno por Id
router.post("/cars", carController.create ) ;  // crear un carro
router.put("/cars/:id" , carController.update ) ; // actualizar uno en abse a id
router.delete("/cars/:id" , carController.delete ) ; // borrar uno en abse a id

//------------------------------------------------------------------


//------------------------------------------------------------------
//-----   Users routes  (para Gestión de usuarios)  ----------------

router.get("/users", userController.getAll ); // consultar todos
router.get("/users/:id" , userController.getById);  // consultar uno por Id
router.post("/users", userController.create ) ;  // crear un carro
router.put("/users/:id" , userController.update ) ; // actualizar uno en abse a id
router.delete("/users/:id" , userController.delete ) ; // borrar uno en abse a id

//------------------------------------------------------------------




// exportar las rutas
module.exports = router;