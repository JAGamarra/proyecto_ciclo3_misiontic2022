require('dotenv').config();  // cargar variables de ambiente

// Configuracion del servidor web
const express = require('express');
const cors = require('cors'); // Habilitar la conexion desde cualquier fuente
                              // Error corregido por cors: Cross Site Origin

const app = express();  // genera una aplicación de express
app.use(cors());
app.use(express.json());  // servidor web recibe/entrega datos json
app.use(express.urlencoded({ extended: true })); // la direción url admite variables

//-----  Conexion a MongoDB ------------
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then ( () => console.log("Conectado a la base de datos."))
    .catch( (err) => console.error(err));
 
// Definir rutas
 app.use("/api", require("./routes/routes"));

// Iniciar servidor
const port = process.env.PORT; //variable de ambiente puerto
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))  //escuchar por el port elegido.