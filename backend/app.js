require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require("./dataBase/Sql");
const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    await pool.query(
      'INSERT INTO LOGIN (username, password) VALUES (?, ?)',
      [username, password]
    );
    res.json({ message: 'Sign Up Successful!' });
  } catch (err) {
    res.status(400).json({ error: 'Username already exists' });
  }
});

app.get('/appointments', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM patients ORDER BY date ASC, time ASC');
    res.json(results);  
  } catch (err) {
    console.error('Error fetching patients:', err);
    res.status(500).json({ error: 'Database query error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const [results] = await pool.query('SELECT * FROM LOGIN WHERE username = ?', [username]);
    if (results.length === 0 || results[0].password !== password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login Successful!', token });
  } catch (err) {
    return res.status(500).json({ error: 'Database query error' });
  }
});

app.post('/getappointment', async (req, res) => {
  const { name, age, gender, address, doctor, date, time } = req.body;
  try {
    const [results] = await pool.query(
      'INSERT INTO patients(name, age, gender, address, doctor, date, time) VALUES(?, ?, ?, ?, ?, ?, ?)',
      [name, age, gender, address, doctor, date, time]
    );
    res.json({ message: 'Appointment created successfully!' });
  } catch (e) {
    return res.status(500).json({ error: 'Database query error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
