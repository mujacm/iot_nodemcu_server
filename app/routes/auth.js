var express = require('express')
var router = express.Router()
var controller = require('../controllers/auth.controller')


router.post('/signup',controller.signup)
router.post('/login',controller.login)

module.exports = router
 