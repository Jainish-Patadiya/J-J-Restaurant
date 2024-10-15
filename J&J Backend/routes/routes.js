const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Define the route to get users
router.get('/users', userController.getUsers);
router.post('/saveUser', userController.saveUser);

module.exports = router;
