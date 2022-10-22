const express = require('express')
const router = express.Router()

const {
  signUp,
  logIn,
  forgotPassword,
  resetPassword
} = require('../controllers/auth')

router.route('/signup').post(signUp)
router.route('/login').post(logIn)
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password').post(resetPassword)


module.exports = router
