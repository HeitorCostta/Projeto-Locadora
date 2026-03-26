const updateUserService = require('../services/updateUserService');

class UpdateUserController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await updateUserService.execute({ id, name, email });

      return res.json(user);

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UpdateUserController();