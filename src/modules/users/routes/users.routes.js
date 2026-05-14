const express = require('express');
const createUserController = require('../controllers/createUserController.js');
const listUsersController = require('../controllers/listUsersController.js');
const deleteUserController = require('../controllers/deleteUserController.js');
const updateUserController = require('../controllers/updateUserController.js');

const router = express.Router();

router.post('/', (req, res) => {
  return createUserController.handle(req, res);
});

router.get("/", (req,res)=>{
  return listUsersController.handle(req,res);
})

router.delete("/:id", (req,res)=>{
  return deleteUserController.handle(req, res);
})

router.put("/:id", (req,res)=>{
  return updateUserController.handle(req, res);
})

module.exports = router;
