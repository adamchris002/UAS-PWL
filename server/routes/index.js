const routes = require('express').Router();

const classesRoutes = require('./classes')
const userRoutes = require('./users')

routes.use('/user', userRoutes)
routes.use('/class', classesRoutes)

module.exports = routes;