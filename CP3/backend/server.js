const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Replace with the origin of your frontend
  methods: ['GET', 'POST'], // Specify methods your frontend can use
}));

// Other middleware
app.use(express.json());

// Your routes
app.post('/login', (req, res) => {
  // Login logic here
});

app.post('/signup', (req, res) => {
  // Signup logic here
});

// Start the server
const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
