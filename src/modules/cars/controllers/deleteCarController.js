const deleteCarService = require('../services/deleteCarService');

class DeleteCarController {
  async handle(req, res) {
    try {
      const { id } = req.params;

      await deleteCarService.execute(id);

      return res.status(200).json({
        message: 'Carro deletado com sucesso'
      });

    } catch (error) {
      return res.status(400).json({
        error: error.message
      });
    }
  }
}

module.exports = new DeleteCarController();