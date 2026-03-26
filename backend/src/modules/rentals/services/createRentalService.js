const rentalsRepository = require('../repositories/rentalsRepository');
const usersRepository = require('../../users/repositories/usersRepository');
const carsRepository = require('../../../repositories/carsRepository');

class CreateRentalService {
  async execute({ user_id, car_id })
 {
    // Usuário existe?
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new Error('Usuário não existe');
    }

    //  Carro existe?
    const car = await carsRepository.findById(car_id);
    if (!car) {
      throw new Error('Carro não existe');
    }

    //  Carro já está alugado?
    const rentalOpen = await rentalsRepository.findOpenByCar(car_id);
    if (rentalOpen) {
      throw new Error('Carro indisponível');
    }


    //  Criar aluguel (aberto)
    const rental = await rentalsRepository.create({
      user_id,
      car_id,
      start_date: new Date(),
      end_date: null,
      total_price: null
    });



    //  Marcar carro como indisponível
    await carsRepository.updateAvailability(car_id, false);

    return rental;
  }
}

module.exports = new CreateRentalService();
