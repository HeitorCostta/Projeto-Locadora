const usersRepository = require('../repositories/usersRepository');

class ListUsersService {
  async execute() {
    const users = await usersRepository.findAll();
    return users;
  }
}

module.exports = new ListUsersService();