const listCarsService = require('../services/listCarsService');

class ListCarsController {
  async handle(req, res) {
    try {
      const cars = await listCarsService.execute();
      return res.status(200).json(cars);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ListCarsController();
