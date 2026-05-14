const usersRepository = require('../repositories/usersRepository');

class UpdateUserService {
  async execute({ id, data }) {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return await usersRepository.update({ id, data });
  }
}

module.exports = new UpdateUserService();