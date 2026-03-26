const rentalsRepository = require("../repositories/rentalsRepository");

class ListRentalsService {
  async execute() {
    const rentals = await rentalsRepository.findAll();
    return rentals;
  }
}

module.exports = new ListRentalsService();