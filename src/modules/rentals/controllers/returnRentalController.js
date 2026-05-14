const returnRentalService = require("../services/returnRentalService");

class ReturnRentalController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      const rental = await returnRentalService.execute(id);

      return res.status(200).json(rental);
    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  }
}

module.exports = new ReturnRentalController();
