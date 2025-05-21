const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../Frontend/WelcomePage")));

const predictRoutes = require("./routes/predict");
app.use("/api/predict", predictRoutes);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/WelcomePage/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
