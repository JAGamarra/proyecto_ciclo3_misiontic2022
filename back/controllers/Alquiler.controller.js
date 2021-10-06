const alquilerModel = require("../models/Alquiler.model");

module.exports = class AlquilerController {
  static async create(req, res) {
    try {
      let data = req.body;
      data = await alquilerModel.create(data);
    } catch (error) {}
  }
};
