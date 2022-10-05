const Coustmer = require("../models/Coustmer");
const asyncWrapper = require("../middleware/async");
const bcrypt = require("bcrypt");

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
    return res.json({ status: "Invalid Username/Password"});
  }
  const check = await bcrypt.compare(password, task.password);
  if (check) {
    return res.json({ status: "Logged In"});
  }else{
    return res.json({status :"Invalid Username/Password"});
  }
});


module.exports = {
  signUp,
  logIn,
};
