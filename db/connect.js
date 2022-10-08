const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("MongoDB is connected."))
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
