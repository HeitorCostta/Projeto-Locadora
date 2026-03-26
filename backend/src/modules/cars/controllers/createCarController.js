const createCarService = require('../../../services/createCarService');

class CreateCarController {
  async handle(req, res) {
    try {
      const { brand, model, year, plate, daily_rate } = req.body;

      const car = await createCarService.execute({
        brand,
        model,
        year,
        plate,
        daily_rate
      });

      return res.status(201).json(car);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAvailable(req, res) {
    try {
      const cars = await createCarService.getAvailableCars();
      return res.json(cars);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CreateCarController();