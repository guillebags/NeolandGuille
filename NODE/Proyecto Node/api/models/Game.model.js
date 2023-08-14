//imports
const mongoose = require("mongoose");

//traemos Schema de la librería mongoose
const Schema = mongoose.Schema;

//definimos el modelo de datos
const GameSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    genre: {
      type: String,
      enum: [
        "FPS",
        "RPG",
        "Adventure",
        "Simulation",
        "Strategy",
        "Sports & Fitness",
        "Fighting",
        "Platformers",
        "Survival & Horror",
        "Stealth",
        "Interactive Movie",
        "Puzzlers & Party Games",
        "Educational",
        "Social Deduction",
        "Augmented Reality",
      ],
    },
    year: { type: Number },
    theme: [{ type: String, default: "" }],
    players: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", default: "" },
    ],
    favUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    image: { type: String },
    platforms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Platform" }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
