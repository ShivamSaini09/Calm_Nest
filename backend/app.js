
// 
// const express = require("express");
// const cors = require("cors");
// const path = require("path");


// const app = express();


// app.use(cors());
// app.use(express.json());

// app.use(express.static(path.join(__dirname, "../Frontend/WelcomePage")));

// const predictRoutes = require("./routes/predict");
// app.use("/api/predict", predictRoutes);


// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Frontend/WelcomePage/index.html"));
// });

// app.get('/api/student', (req, res) => {
//   res.json({
//     name: "Aarzoo",
//     studentId: "s225095435"
//   });
// });

// const PORT = process.env.PORT || 3000;
// if (process.env.NODE_ENV !== "test") {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }

// module.exports = app;
//
const express = require('express');
const path = require('path');
const app = express();

// ✅ Serve static files from frontend
app.use(express.static(path.join(__dirname, '../Frontend/WelcomePage')));

// ✅ Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/WelcomePage/index.html'));
});

// ✅ Student API route
app.get('/api/student', (req, res) => {
  res.json({
    name: "Aarzoo",
    studentId: "s225095435"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
