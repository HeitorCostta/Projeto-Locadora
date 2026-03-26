const express = require('express');
const createCarController = require('../controllers/createCarController');
const listCarsController = require('../controllers/listCarsController');

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


module.exports = router;