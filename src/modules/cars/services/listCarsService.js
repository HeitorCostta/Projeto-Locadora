const carsRepository = require('../repositories/carsRepository');

class ListCarsService {
  async execute() {
    const cars = await carsRepository.findAll();
    return cars;
  }
}

module.exports = new ListCarsService();
