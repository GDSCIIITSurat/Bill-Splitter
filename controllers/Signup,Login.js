const Coustmer = require("../models/Coustmer");
const asyncWrapper = require("../middleware/async");
const bcrypt = require("bcrypt");


const signUp = asyncWrapper(async (req, res, next) => {
  const {
    name,
    email,
    password: plainTextPassword,
    contactNumber
  } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  const Create = async () => {
    try {
      const response = await Coustmer.create({
        name,
        email,
        password,
        contactNumber
      });
      console.log("User created successfully: ", response);
    } catch (err) {
      console.log(err);
    }
  };
  Create();
  res.json({ status: "ok" });
});

module.exports = {
  signUp,
};
