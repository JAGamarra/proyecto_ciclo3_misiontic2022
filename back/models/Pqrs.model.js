// Este modelo es dinámico dependiendo de los campos en la abse de datos en esta colección.

const mongoose = require("mongoose");  // cargar la biblioteca

// crear esquema de mongo DB para la colección usarios

const pqrsSchema = mongoose.Schema({
    
    tipo:{type:String},
    motivo:{type:String},
    email:{type:String},
    descripcion:{type:String},
    fecha:  { type: Date, default: Date.now },
    

  
    // si tuviese un campo compuesto : 
    // size : {
    //     altura:Number ,
    //     weight:Number 
    // }

});

module.exports = mongoose.model("Pqrs",pqrsSchema);