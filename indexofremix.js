const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MySQL Connection Setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});


app.get("/get_courses", (req, res) => {
    const query = "SELECT * FROM courses";
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error querying database: ' + err.stack);
        res.status(500).send('Error querying database');
        return;
      }
     res.json(results);
    });
  });


  app.post("/add_users", (req, res) => {

    const { first_name, last_name, email, gender, password } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).json({ message: "All fields are required." });
    }
    const query = "INSERT INTO courses (first_name, last_name, email, gender, password) VALUES (?, ?, ?, ?, ?)";
    const values = [first_name, last_name, email, gender, password];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting into database: ' + err.stack);
            return res.status(500).send('Error inserting into database');
        }
        res.status(201).json({ message: "User added successfully.", userId: result.insertId });
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
