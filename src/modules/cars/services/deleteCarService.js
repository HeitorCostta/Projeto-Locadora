const carsRepository = require('../repositories/carsRepository');

class DeleteCarService {
  async execute(id) {
    const car = await carsRepository.findById(id);

    if (!car) {
      throw new Error('Carro não encontrado');
    }

    await carsRepository.delete(id);
  }
}

module.exports = new DeleteCarService();