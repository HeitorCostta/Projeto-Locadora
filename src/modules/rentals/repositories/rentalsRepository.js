const pool = require('../../../database/connection');

class RentalsRepository {
  async findById(id) {
    const query = `
      SELECT * FROM rentals
      WHERE id = $1
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  async findOpenByCar(car_id) {
    const query = `
      SELECT * FROM rentals
      WHERE car_id = $1 AND end_date IS NULL
    `;

    const result = await pool.query(query, [car_id]);
    return result.rows[0];
  }

  async create({ user_id, car_id, start_date }) {
    const query = `
      INSERT INTO rentals (user_id, car_id, start_date)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    const values = [user_id, car_id, start_date];
    const result = await pool.query(query, values);

    return result.rows[0];
  }

  async findAll() {
  const query = `
    SELECT * FROM rentals
    ORDER BY created_at DESC
  `;

  const result = await pool.query(query);
  return result.rows;
}

  async finishRental({ id, end_date, total_price }) {
    const query = `
      UPDATE rentals
      SET end_date = $2,
          total_price = $3
      WHERE id = $1
      RETURNING *
    `;

    const values = [id, end_date, total_price];
    const result = await pool.query(query, values);

    return result.rows[0];
  }
}

module.exports = new RentalsRepository();
