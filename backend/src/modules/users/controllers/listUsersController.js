const listUsersService = require('../services/listUsersService');

class ListUsersController {
  async handle(req, res) {
    try {
      const users = await listUsersService.execute();

      return res.json(users);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ListUsersController();