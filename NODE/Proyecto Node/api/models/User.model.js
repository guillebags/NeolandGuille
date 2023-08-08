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
      enum: ["mujer", "hombre", "no binarie", "otros"], //enumeracion de los diferentes valores que puede tener
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user", "superadmin"],
      default: "user",
    },
    confirmationCode: { type: Number },
    check: { type: Boolean, default: false },
    image: { type: String },
    characterFavs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  { timestamps: true }
);

//! Presave para encriptar la contraseña
UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10); //10 son las vueltas para desencriptarla
    next();
  } catch (error) {
    next("Failed hashing password ❌", error);
  }
});

//! Crear modelo
const User = mongoose.model("User", UserSchema);

//! Exportarlo
module.exports = User;
