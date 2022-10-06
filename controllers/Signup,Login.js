const Coustmer = require("../models/Coustmer");
const asyncWrapper = require("../middleware/async");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#(&@!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const signUp = asyncWrapper(async (req, res, next) => {
  const { name, email, password: plainTextPassword, contactNumber } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  const Create = async () => {
    try {
      const response = await Coustmer.create({
        name,
        email,
        password,
        contactNumber,
      });
      console.log("User created successfully: ", response);
    } catch (err) {
      console.log(err);
    }
  };
  Create();
  res.json({ status: "ok" });
});

const logIn = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const task = await Coustmer.findOne({ email }).lean();
  if (!task) {
    return res.json({ status: "Invalid Username/Password" });
  }
  const check = await bcrypt.compare(password, task.password);
  const confirm = await bcrypt.compare(req.body.confirmpassword, task.password);
  if (check && confirm) {
    const token = jwt.sign(
      {
        id: task._id,
        email: task.email,
      },
      JWT_SECRET
    );
    return res.json({ status: "Logged In", data: token, task });
  } else {
    return res.json({ status: "Invalid Username/Password" });
  }
});

module.exports = {
  signUp,
  logIn,
};
