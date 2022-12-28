const classesRoutes = require('express').Router()
const {ClassController} = require('../controllers')

classesRoutes.post('/addclass', ClassController.addClass)
classesRoutes.get('/', ClassController.getClass)
classesRoutes.get('/view/:id', ClassController.viewClass)

module.exports = classesRoutes;