const express = require("express");
const { chatWithBot } = require("../controllers/chatController");

const router = express.Router();

// Since app.js uses: app.use("/api/chat", chatRoutes)
// This will respond to POST /api/chat
router.post("/", chatWithBot);

module.exports = router;
