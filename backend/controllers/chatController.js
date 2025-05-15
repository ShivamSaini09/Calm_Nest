const { getAIReply, getRiskLevelFromAnswers } = require("../services/chatService");
const Chat = require("../models/chatModel"); // ✅ only once

const chatWithBot = async (req, res) => {
  try {
    const { message, answers } = req.body;

    // 🟢 Chatbot Flow
    if (message && typeof message === "string") {
      const reply = await getAIReply(message);
      await Chat.create({ message, reply });
      return res.status(200).json({ reply });
    }

    // 🟢 Assessment Flow
    if (answers && Array.isArray(answers)) {
      if (answers.length === 0 || answers.some(n => typeof n !== "number")) {
        return res.status(400).json({ error: "Invalid answers array." });
      }

      const riskLevel = await getRiskLevelFromAnswers(answers);
      const result = await Chat.create({ answers, riskLevel }); // ✅ Store in same model
      return res.status(200).json(result);
    }

    return res.status(400).json({ error: "Either 'message' or 'answers' must be provided." });

  } catch (err) {
    console.log("Incoming request body:", req.body);
    console.error("Error in chatWithBot:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { chatWithBot };

