const updateUserService = require('../services/updateUserService');

class UpdateUserController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const user = await updateUserService.execute({
        id,
        data
      });

      return res.status(200).json(user);

    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  }
}

module.exports = new UpdateUserController();