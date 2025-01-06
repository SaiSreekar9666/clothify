// // Basic form validation and logging input data
// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const countryCode = document.getElementById('country-code').value;
//     const phone = document.getElementById('phone').value;
//     const password = document.getElementById('password').value;

//     console.log(`Name: ${name}`);
//     console.log(`Email: ${email}`);
//     console.log(`Phone: ${countryCode} ${phone}`);
//     console.log(`Password: ${password}`);

//     alert('Signup successful! Check the console for details.');
// });
import express, { json } from 'express';
import { hash } from 'bcrypt';
import { promise } from './db'; // Import the database connection

const app = express();
app.use(json());

// Signup route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const [existingUser] = await promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert user into the database
    await promise().query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Error during signup:', err.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
