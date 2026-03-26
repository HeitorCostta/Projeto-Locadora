const express = require('express');
const cors = require('cors');
const app = express();
const usersRoutes = require('./modules/users/routes/users.routes')
const carsRoutes = require('./modules/cars/routes/cars.routes');
const rentalsRoutes = require('./modules/rentals/routes/rentals.routes');

app.use(express.json());
app.use(cors());

app.use('/user', usersRoutes);

app.use('/cars', carsRoutes);

app.use('/rentals', rentalsRoutes);

module.exports = app;
