//! Imports
const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");

//! Mongoose schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Email not valid"],
  },
});
