// Este modelo es dinámico dpendiendo de los campos en la abse de datos en esta colección.

const mongoose = require("mongoose");  // cargar la biblioteca

// crear esquema de mongo DB para la colección Cars

const carSchema = mongoose.Schema({
    
    code: {type:String, unique:true},
    showInfo: {type:Boolean , default:false} ,
    name: String,
    price: { type: Number, min: 0  },
    tipo:String,
    numeroMaletas:Number,
    numeroPersonas:Number,
    aire:String,
    img:String

    // si tuviese un campo compuesto : 
    // size : {
    //     altura:Number ,
    //     weight:Number 
    // }

});

module.exports = mongoose.model("Car", carSchema);