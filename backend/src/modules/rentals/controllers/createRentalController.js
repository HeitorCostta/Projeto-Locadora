const createRentalService = require('../services/createRentalService');

class CreateRentalController {
async handle(req, res) {
  try {
    const { user_id, car_id, start_date, end_date } = req.body;

    const rental = await createRentalService.execute({
      user_id,
      car_id,
      start_date,
      end_date
    });

    return res.status(201).json(rental);

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
}

module.exports = new CreateRentalController();
