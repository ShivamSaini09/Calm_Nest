const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  reply: {
    type: String,
  },
  answers: {
    type: [Number],
  },
  riskLevel: {
    type: String,
    enum: ["Low", "Moderate", "High"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);
