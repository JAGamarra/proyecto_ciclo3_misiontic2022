// Este modelo es dinámico dpendiendo de los campos en la abse de datos en esta colección.

const mongoose = require("mongoose");  // cargar la biblioteca

// crear esquema de mongo DB para la colección Cars

const carSchema = mongoose.Schema({
    
<<<<<<< HEAD
    code: String,
    showInfo:Boolean,
    name: String,
    price: Number,
    tipo:String,
    numeroMaletas:Number,
    numeroPersonas:Number,
    aire:String,
    img:String
=======
    code: {type:String, unique:true},
    showInfo: {type:Boolean , default:false} ,
    name: String,
    price: { type: Number, min: 0  },
    tipo:String,
    numeroMaletas:{type:Number , max:9},
    numeroPersonas:{type:Number , max:9},
    aire:String,
    img:String,
    stock:{type:Number , default:1}
>>>>>>> 1c8f94259fe7cd8590f739330cb64a7c5ab24d62

    // si tuviese un campo compuesto : 
    // size : {
    //     altura:Number ,
    //     weight:Number 
    // }

});

module.exports = mongoose.model("Car", carSchema);