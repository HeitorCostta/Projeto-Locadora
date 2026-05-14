const carsRepository = require('../repositories/carsRepository');

class CreateCarService {

  async execute({ brand, model, year, plate, daily_rate }) {
    // validação simples
    if (!brand || !model || !year || !plate || !daily_rate) {
      throw new Error("Todos os campos são obrigatórios");
    }

    // checar se a placa já existe
    const existingCars = await carsRepository.findAll();
    const plateExists = existingCars.find(car => car.plate === plate);

    if (plateExists) {
      throw new Error("Placa já cadastrada");
    }

    const car = await carsRepository.create({
      brand,
      model,
      year,
      plate,
      daily_rate
    });

    return car;
  }

  // NOVO MÉTODO
  async getAvailableCars() {
    const cars = await carsRepository.findAvailable();
    return cars;
  }

}

module.exports = new CreateCarService();