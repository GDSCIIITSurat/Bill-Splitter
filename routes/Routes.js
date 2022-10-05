const express = require('express')
const router = express.Router()

const {
  signUp,
  logIn
} = require('../controllers/Signup,login')

router.route('/signup').post(signUp)
router.route('/login').get(logIn)


module.exports = router
