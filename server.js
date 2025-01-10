
const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');  // For parsing JSON bodies

const app = express();
const PORT = 3000;

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'my_db',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

// Middleware to parse JSON request bodies

app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve index.html from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for signup

app.post("/signup", (req, res) => {
  const { full_name, phone_number, email, password } = req.body;

  // Basic validation (server-side)
  if (!full_name || !phone_number || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
  }

  // SQL query to insert the data into the database
  const query = "INSERT INTO users (full_name, phone_number, email, password) VALUES (?, ?, ?, ?)";
  db.query(query, [full_name, phone_number, email, password], (err, result) => {
      if (err) {
          console.error("Error inserting data:", err);
          return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "User signed up successfully!" });
  });
});

//Route for login-page
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
  }

  // Query the database to validate the credentials
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
      if (err) {
          console.error('Error during login:', err);
          return res.status(500).json({ message: 'Internal server error.' });
      }

      if (results.length > 0) {
          // Successful login
          res.json({ message: 'Login successful.', user: results[0] });
      } else {
          // Invalid credentials
          res.status(401).json({ message: 'Invalid email or password.' });
      }
  });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
