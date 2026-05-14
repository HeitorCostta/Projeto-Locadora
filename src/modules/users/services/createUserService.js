const usersRepository = require('../repositories/usersRepository');

class CreateUserService {
  async execute({ name, email, password }) {
    const userExists = await usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error('Email já cadastrado');
    }

    const user = await usersRepository.create({
      name,
      email,
      password_hash: password
    });

    return user;
  }
}

module.exports = new CreateUserService();
