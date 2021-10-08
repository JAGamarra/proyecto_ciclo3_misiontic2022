const mongoose = require("mongoose");

const alquilerSchema = new mongoose.Schema({
  pickupLocation: String,
  pickupDate: Date,
  returnLocation: String,
  returnDate: Date,
});

module.exports = mongoose.model("Alquiler", alquilerSchema);
