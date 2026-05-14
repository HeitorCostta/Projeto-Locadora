const listRentalsService = require("../services/ListRentalsService");

class ListRentalsController {
  async handle(req, res) {
    const rentals = await listRentalsService.execute();
    return res.json(rentals);
  }
}

module.exports = new ListRentalsController();