const deleteUserService = require('../services/deleteUserService');

class DeleteUserController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      await deleteUserService.execute(id);

      return res.json({ message: 'Usuário deletado com sucesso' });

    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new DeleteUserController();