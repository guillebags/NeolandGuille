const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

//creamos el modelo de user
const UserSchema = new mongoose.Schema(
  {
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
    confirmationCode: { type: Number, required: true },
    check: { type: Boolean, default: false },
    image: { type: String },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {}
});
