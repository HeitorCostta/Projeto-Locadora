const rentalsRepository = require("../repositories/rentalsRepository");
const carsRepository = require("../repositories/carsRepository");

class ReturnRentalService {
  async execute(rental_id) {
    // 1️⃣ Buscar aluguel
    const rental = await rentalsRepository.findById(rental_id);

    if (!rental) {
      throw new Error("Aluguel não encontrado");
    }

    if (rental.end_date) {
      throw new Error("Este aluguel já foi devolvido");
    }

    // 2️⃣ Buscar carro
    const car = await carsRepository.findById(rental.car_id);

    // 3️⃣ Calcular dias
    const start = new Date(rental.start_date);
    const end = new Date();

    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const days = diffDays < 1 ? 1 : diffDays;

    // 4️⃣ Calcular preço
    const total_price = days * car.daily_rate;

    // 5️⃣ Finalizar aluguel
    const returnedRental = await rentalsRepository.finishRental({
      id: rental_id,
      end_date: end,
      total_price
    });

    // 6️⃣ Liberar carro
    await carsRepository.updateAvailability(car.id, true);

    return returnedRental;
  }
}

module.exports = new ReturnRentalService();
