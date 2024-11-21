require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
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
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await pool.query(
      'INSERT INTO LOGIN (username, password) VALUES (?, ?)',
      [username, hashedPassword]
    );
    res.json({ message: 'Sign Up Successful!' });
  } catch (err) {
    res.status(400).json({ error: 'Username already exists' });
  }
});

app.get('/appointments', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM patients ORDER BY date ASC,time ASC');
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
    if (results.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login Successful!', token });
  } catch (err) {
    return res.status(500).json({ error: 'Database query error' });
  }
});

app.post('/getappointment', async (req, res) => {
  const { name, age, gender, address, doctor, date, time } = req.body;

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!date || !date.match(dateRegex)) {
    return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD.' });
  }

  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  if (!time || !time.match(timeRegex)) {
    return res.status(400).json({ error: 'Invalid time format. Use HH:mm.' });
  }

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

app.listen(PORT, () => {});