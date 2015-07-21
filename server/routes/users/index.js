'use strict'; 

var router = require('express').Router();
var controller = require('./user.controller')


router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', controller.create)
// router.put('/:id', controller.update)
// router.delete('/:id', controller.destroy)

module.exports = router; 