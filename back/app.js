require('dotenv').config();  // cargar variables de ambiente

// Configuracion del servidor web
const express = require('express');
const cors = require('cors'); // Habilitar la conexion desde cualquier fuente
                              // Error corregido por cors: Cross Site Origin

const morgan = require('morgan');

const app = express();  // genera una aplicación de express
app.use(cors());
app.use(express.json());  // servidor web recibe/entrega datos json
app.use(express.urlencoded({ extended: true })); // la direción url admite variables

// carga de archivos
app.use(express.static("uploads"));
<<<<<<< HEAD

=======
>>>>>>> 1c8f94259fe7cd8590f739330cb64a7c5ab24d62

app.use(morgan('dev'));

//-----  Conexion a MongoDB ------------
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI)
    .then ( () => console.log("Conectado a la MongoDB de Camilo."))
    .catch( (err) => console.error(err));
 
// Definir rutas
 app.use("/api", require("./routes/routes"));

// configuración en producción
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/site/"));
    app.use("*", (req, res) => {
        res.sendFile(__dirname + "/site/index.html")
    });
}

<<<<<<< HEAD

=======
>>>>>>> 1c8f94259fe7cd8590f739330cb64a7c5ab24d62
// Iniciar servidor
const port = process.env.PORT; //variable de ambiente puerto
app.listen(port, () => console.log(`Servidor trabajando en http://localhost:${port}`))  //escuchar por el port elegido.