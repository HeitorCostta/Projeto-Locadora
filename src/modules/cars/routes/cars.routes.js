const express = require('express');

const createCarController = require('../controllers/createCarController');
const listCarsController = require('../controllers/listCarsController');
const updateCarController = require('../controllers/updateCarController');
const deleteCarController = require('../controllers/deleteCarController');

const router = express.Router();

router.get('/available', (req, res) => {
  return createCarController.getAvailable(req, res);
});

router.post('/', (req, res) => {
  return createCarController.handle(req, res);
});

router.get('/', (req, res) => {
  return listCarsController.handle(req, res);
});

router.put('/:id', (req, res) => {
  return updateCarController.handle(req, res);
});

router.delete('/:id', (req, res) => {
  return deleteCarController.handle(req, res);
});

module.exports = router;