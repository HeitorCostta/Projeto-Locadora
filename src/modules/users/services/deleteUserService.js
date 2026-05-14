const usersRepository = require('../repositories/usersRepository');

class DeleteUserService {
  async execute(id) {
    await usersRepository.delete(id);
  }
}

module.exports = new DeleteUserService();