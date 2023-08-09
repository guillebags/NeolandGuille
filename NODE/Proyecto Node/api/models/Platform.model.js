const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlatformSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
    devices: [
      {
        type: String,
        enum: [
          "PC",
          "Mac",
          "PlayStation 4",
          "PlayStation 5",
          "Xbox One",
          "Nintendo Switch",
          "Android",
        ],
      },
    ],
  },
  { timestamps: true }
);

const Platform = mongoose.model("Platform", PlatformSchema);

module.exports = Platform;
