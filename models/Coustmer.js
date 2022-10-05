const mongoose = require("mongoose");

const CoustmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name(s)"],
    unique:true,
    trim: true,
    maxlength: [1000, "name can not be more than 20 characters"],
  },
  contactNumber: {
    type: Number,
    required: [true, "must provide contactNumber"],
    unique:true,
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
    maxlength: [1000, "name can not be more than 20 characters"],
  },
});

module.exports = mongoose.model("Coustmer",CoustmerSchema);
