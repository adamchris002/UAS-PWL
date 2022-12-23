const classesRoutes = require('express').Router()
const {ClassController} = require('../controllers')

classesRoutes.post('/addclass', ClassController.addClass)
classesRoutes.get('/', ClassController.getClass)

module.exports = classesRoutes;