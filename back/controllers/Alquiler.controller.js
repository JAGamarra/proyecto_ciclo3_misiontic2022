import { create as _create } from "../models/Alquiler.model";

export default class AlquilerController {
  static async create(req, res) {
    try {
      let data = req.body;
      data = await _create(data);
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
