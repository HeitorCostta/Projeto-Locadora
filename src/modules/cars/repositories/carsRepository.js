const pool = require('../../../database/connection');

class CarsRepository {
  async create({ brand, model, year, plate, daily_rate }) {
    const query = `
      INSERT INTO cars (brand, model, year, plate, daily_rate)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;

    const values = [brand, model, year, plate, daily_rate];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async findAll() {
    const result = await pool.query('SELECT * FROM cars');
    return result.rows;
  }

  async findAvailable() {
  const result = await pool.query(
    'SELECT * FROM cars WHERE available = true'
  );

  return result.rows;
}

async findById(id) {
  const query = `
    SELECT * FROM cars
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
}

  async updateAvailability(id, available) {
  const query = `
    UPDATE cars
    SET available = $1
    WHERE id = $2
    RETURNING *;
  `;

  const result = await pool.query(query, [available, id]);
  return result.rows[0];
}

async update({ id, data }) {
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
    UPDATE cars
    SET ${fields.join(', ')}
    WHERE id = $${index}
    RETURNING *;
  `;

  const result = await pool.query(query, values);

  return result.rows[0];
}

async delete(id) {
  const query = `
    DELETE FROM cars
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
}

}

module.exports = new CarsRepository();
