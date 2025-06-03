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

// ✅ Export the app for testing
module.exports = app;

// ✅ Only start server if run directly (not during tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
