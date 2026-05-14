const carsRepository = require('../repositories/carsRepository');

class UpdateCarService {
  async execute({ id, data }) {
    const car = await carsRepository.findById(id);

    if (!car) {
      throw new Error('Carro não encontrado');
    }

    return await carsRepository.update({
      id,
      data
    });
  }
}

module.exports = new UpdateCarService();