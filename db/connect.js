const mongoose = require("mongoose");

const connectDB = (url) => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("MongoDB is connected."))
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
