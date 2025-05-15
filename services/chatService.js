// services/chatService.js
const axios = require("axios");

// 🧠 MOCK AI CHAT REPLY (you already use this or OpenAI)
const getAIReply = async (message) => {
  if (message.toLowerCase().includes("sad")) {
    return "I'm sorry you're feeling that way. I'm here for you.";
  }
  return "I'm here to listen. Tell me more.";
};

// 🔍 MOCK RISK PREDICTION (CURRENTLY ACTIVE)
const getRiskLevelFromAnswers = async (answers) => {
  const total = answers.reduce((sum, n) => sum + n, 0);
  if (total <= 5) return "Low";
  if (total <= 10) return "Moderate";
  return "High";
};

/*
// 🔬 REAL ML MODEL INTEGRATION (COMMENTED OUT FOR NOW)

const getRiskLevelFromAnswers = async (answers) => {
  try {
    const response = await axios.post("http://localhost:5000/predict", {
      answers: answers,
    });
    return response.data.riskLevel;
  } catch (error) {
    console.error("ML model error:", error.message);
    return "Unknown"; // fallback
  }
};
*/

module.exports = {
  getAIReply,
  getRiskLevelFromAnswers,
};
