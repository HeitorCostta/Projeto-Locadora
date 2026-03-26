CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL,
  plate TEXT UNIQUE NOT NULL,
  daily_rate NUMERIC(10,2) NOT NULL,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE rentals (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  car_id INT REFERENCES cars(id),
  start_date TIMESTAMP DEFAULT NOW(),
  end_date TIMESTAMP,
  total_price NUMERIC(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);
