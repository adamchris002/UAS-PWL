const userRoutes = require('express').Router();
const {UserController} = require('../controllers')


userRoutes.post('/register', UserController.register);

module.exports = userRoutes;