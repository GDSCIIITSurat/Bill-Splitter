const Coustmer = require("../models/Coustmer")
const asyncWrapper = require("../middleware/async")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

const signUp = asyncWrapper(async (req, res, next) => {
  const {
    name,
    email,
    password: plainTextPassword,
    contactNumber,
    confirmPassword
  } = req.body
  const password = await bcrypt.hash(plainTextPassword, 10)

  const isAccountPresent = await Coustmer.findOne({ email })

  if (isAccountPresent) {
    return res.status(403).json({ msg: "User Already exists." })
  } else {
    if (await bcrypt.compare(confirmPassword, password)) {
      const Create = async () => {
        try {
          const response = await Coustmer.create({
            name,
            email,
            password,
            contactNumber
          })
          console.log("User created successfully: ", response)
        } catch (err) {
          console.log(err)
        }
      }

      Create()
      res.status(201).json({ status: "ok" })
    } else
      res
        .status(401)
        .json({ msg: "Password and confirmPassword does not match." })
  }
})

const logIn = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body

  const task = await Coustmer.findOne({ email }).lean()
  if (!task) {
    return res.status(401).json({ status: "Invalid Username/Password" })
  }

  const check = await bcrypt.compare(password, task.password)
  if (check) {
    const token = jwt.sign(
      {
        id: task._id,
        email: task.email
      },
      process.env.JWT_SECRET
    )
    return res.status(200).json({ status: "Logged In", data: token, task })
  } else {
    return res.status(401).json({ status: "Invalid Username/Password" })
  }
})

const forgotPassword = asyncWrapper(async (req, res, next) => {
  const { email } = req.body

  const task = await Coustmer.findOne({ email }).lean()
  if (!task) {
    return res.status(401).json({ status: "Email Unregistered" })
  }

  let jwtSecretKey = process.env.JWT_SECRET_KEY
  let data = {
    time: Date(),
    userEmail: email
  }

  const token = jwt.sign(data, jwtSecretKey, {
    expiresIn: "300s"
  })

  let mailTransporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "outlook", // Not Supporting Gmail
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD
    }
  })

  let mailDetails = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "Reset Password",
    text: `To Reset Password Click Here: http://localhost:3000/reset-password/${token}`
  }

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      return res.status(500).json({ status: "Email Not Sent" })
    } else {
      return res.status(200).json({ status: "Email Sent" })
    }
  })
})

const resetPassword = asyncWrapper(async (req, res, next) => {
  const { password: plainTextPassword, confirmPassword, token } = req.body

  let jwtSecretKey = process.env.JWT_SECRET_KEY

  try {
    const verified = jwt.verify(token, jwtSecretKey)
    if (verified) {
      const { userEmail } = JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString()
      )
      const password = await bcrypt.hash(plainTextPassword, 10)
      if (await bcrypt.compare(confirmPassword, password)) {
        await Coustmer.updateOne(
          { email: userEmail },
          { $set: { password: password } }
        )
        return res.status(200).json({ status: "Password Successfully Changed" })
      } else {
        res
          .status(401)
          .json({ msg: "Password and confirmPassword does not match." })
      }
    } else {
      return res.status(401).json({ status: "Invalid Token, Link expired" })
    }
  } catch (error) {
    return res
      .status(401)
      .json({ status: "Cannot change password", data: error })
  }
})

module.exports = {
  signUp,
  logIn,
  forgotPassword,
  resetPassword
}
