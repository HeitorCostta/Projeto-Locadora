const pool = require('../../../database/connection');

class UsersRepository {
  async create({ name, email, password_hash }) {
    const query = `
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [name, email, password_hash];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async findByEmail(email) {
    const query = `
      SELECT * FROM users
      WHERE email = $1;
    `;

    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  async findById(id) {
    const query = `
      SELECT * FROM users
      WHERE id = $1;
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  async findAll() {
    const query = `
      SELECT * FROM users;
    `;

    const result = await pool.query(query);
    return result.rows;
  }

  async delete(id) {
    const query = `
      DELETE FROM users
      WHERE id = $1
      RETURNING *;
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  async update({ id, data }) {
    // 💥 proteção contra undefined/null
    if (!data || typeof data !== 'object') {
      throw new Error('Body inválido para atualização');
    }

    const keys = Object.keys(data);

    if (keys.length === 0) {
      throw new Error('Nenhum campo enviado para atualização');
    }

    const fields = [];
    const values = [];

    let index = 1;

    for (const key of keys) {
      fields.push(`${key} = $${index}`);
      values.push(data[key]);
      index++;
    }

    values.push(id);

    const query = `
      UPDATE users
      SET ${fields.join(', ')}
      WHERE id = $${index}
      RETURNING *;
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = new UsersRepository();