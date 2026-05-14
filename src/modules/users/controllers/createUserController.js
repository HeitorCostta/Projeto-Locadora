const createUserService = require('../services/createUserService');

class CreateUserController {
  async handle(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await createUserService.execute({
        name,
        email,
        password
      });

      return res.status(201).json(user);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CreateUserController();
