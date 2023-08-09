//imports
const mongoose = require("mongoose");

//traemos Schema de la librería mongoose
const Schema = mongoose.Schema;

//definimos el modelo de datos
const GameSchema = new Schema(
  {
    name: { type: String, required: true },
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
    theme: [
      {
        type: String,
        enum: [
          "Space",
          "Open World",
          "Fantasy",
          "Anime",
          "Farm",
          "Sci-fi",
          "Choices Matter",
          "Casual",
          "Romance",
          "Singleplayer",
          "Multiplayer",
          "MMO",
          //? to do: puedo meterlo como array?
        ],
      },
    ],
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    image: { type: String },
    platforms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Platform" }],
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
