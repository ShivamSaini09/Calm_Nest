const chat = require("../models/chatModel");

const saveChat = async (answers, riskLevel) => {
  const newChat = new Chat({ answers, riskLevel });
  return await newChat.save();
};

module.exports = { saveChat };
