const mongoose = require("mongoose");

const CoustmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name(s)"],
    trim: true,
    maxlength: [50 , "name can not be more than 50 characters"],
  },
  contactNumber: {
    type: Number,
    required: [true, "must provide contactNumber"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "must provide email"],
    unique:true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "must provide password"],
    trim: true,
    minlength: [6, "min length should be 6 letters"],
  },
});

module.exports = mongoose.model("Coustmer",CoustmerSchema);
