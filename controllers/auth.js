const Coustmer = require("../models/Coustmer");
const asyncWrapper = require("../middleware/async");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = asyncWrapper(async (req, res, next) => {
  const { name, email, password: plainTextPassword, contactNumber, confirmPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  const isAccountPresent = await Coustmer.findOne({ email });
  
  if(isAccountPresent){
    return res.status(403).json({msg : "User Already exists."})
  }
  else{
    if(await bcrypt.compare(confirmPassword, password)){
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
      res.status(201).json({status : "ok"});
    }
    else res.status(401).json({msg:"Password and confirmPassword does not match."})
  }
});

const logIn = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const task = await Coustmer.findOne({ email }).lean();
  if (!task) {
    return res.status(401).json({ status: "Invalid Username/Password" });
  }

  const check = await bcrypt.compare(password, task.password);
  if (check) {
    const token = jwt.sign(
      {
        id: task._id,
        email: task.email,
      },
      process.env.JWT_SECRET
    );
    return res.status(200).json({ status: "Logged In", data: token, task });
  } else {
    return res.status(401).json({ status: "Invalid Username/Password" });
  }
});

module.exports = {
  signUp,
  logIn
};
