// Este modelo es dinámico dependiendo de los campos en la abse de datos en esta colección.

const mongoose = require("mongoose");  // cargar la biblioteca

// crear esquema de mongo DB para la colección usarios

const carSchema = mongoose.Schema({
    
    usuario:{type:String, unique:true},
    password: {type:String, unique:true},  
    userType: String , 
    mail :  {type:String, unique:true},
    registrationDate:  { type: Date, default: Date.now },

  
    // si tuviese un campo compuesto : 
    // size : {
    //     altura:Number ,
    //     weight:Number 
    // }

});

module.exports = mongoose.model("User", carSchema);