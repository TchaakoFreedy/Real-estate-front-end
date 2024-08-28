// Import necessary modules
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express(); // Initialize express app
const saltRounds = 10; // Number of salt rounds for bcrypt

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cors({ origin: '*' })); // Allow CORS from all origins
app.use(cookieParser()); // Parse cookies

// MySQL database connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Your database password
  database: "RealestateApp" // Your database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// API endpoint for user registration
app.post('/register', (req, res) => {
  // SQL query to insert a new user into the 'register' table
  const sql = "INSERT INTO register (name, email, password) VALUES (?, ?, ?)";

  // Hash the user's password before storing it in the database
  bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ Error: "Error hashing password" });
    }

    // Values to be inserted into the database
    const values = [req.body.name, req.body.email, hash];

    // Execute the SQL query
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ Error: "Inserting data Error in server" });
      }
      return res.json({ Status: "Success" });
    });
  });
});

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Start the server on port 8081
app.listen(8081, () => {
  console.log("Server is running on port 8081.");
});
