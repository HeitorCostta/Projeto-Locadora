const { Router } = require('express');
const createRentalController = require('../controllers/createRentalController');
const ReturnRentalController = require("../controllers/returnRentalController");
const listRentalsController = require("../controllers/listRentalsController");
const rentalsRoutes = Router();

rentalsRoutes.post('/', createRentalController.handle);

rentalsRoutes.get("/", listRentalsController.handle);

rentalsRoutes.patch("/:id/return", ReturnRentalController.handle);

module.exports = rentalsRoutes;
