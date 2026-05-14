const updateCarService = require('../services/updateCarService');

class UpdateCarController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const car = await updateCarService.execute({
        id,
        data
      });

      return res.status(200).json(car);

    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  }
}

module.exports = new UpdateCarController();