const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Not a valid email"],
  },
  name: { type: String, required: true, trim: true, unique: true },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: [validator.isStrongPassword],
    minlength: [8, "Min 8 characters"],
  },
  gender: {
    type: String,
    enum: ["mujer", "hombre", "no binarie", "otros"],
    required: true,
  },
  rol: { type: String, enum: ["admin", "user"], required: true },
});
