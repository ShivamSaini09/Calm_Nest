const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");

router.post("/", (req, res) => {
    const answers = Object.values(req.body); // { q1: 2, q2: 3, ..., q42: 1 }

    if (answers.length !== 42) {
        return res.status(400).json({ error: "42 answers are required." });
    }

    const ax = answers.slice(0, 14);
    const dp = answers.slice(14, 28);
    const st = answers.slice(28, 42);

    const args = [...ax, ...dp, ...st].map(String);
    const path = require("path");
    const pythonPath = path.join(__dirname, "../../Ml/predict.py");


    const py = spawn("python3", [pythonPath, ...args]);
    let output = "";
    py.stdout.on("data", (data) => {
        output += data.toString();
    });

    py.stderr.on("data", (data) => {
        console.error("Python error:", data.toString());
    });

    py.on("close", (code) => {
        try {
            const result = JSON.parse(output);
            res.json(result);
        } catch (err) {
            console.error("Error parsing Python output:", output);
            res.status(500).json({ error: "Failed to parse model output" });
        }
    });
});

module.exports = router;
