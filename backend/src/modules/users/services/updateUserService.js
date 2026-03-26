const usersRepository = require('../repositories/usersRepository');

class UpdateUserService {
  async execute({ id, name, email }) {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return await usersRepository.update({ id, name, email });
  }
}

module.exports = new UpdateUserService();