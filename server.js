const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

const session = require("express-session"); // Import express-session module

const app = express();
app.use(bodyParser.json());

const crypto = require("crypto");

// Generate a random secret key (32 characters)
const secretKey = crypto.randomBytes(16).toString("hex");
console.log("Secret Key:", secretKey);

// Configure express-session
app.use(
  session({
    secret: secretKey, // Replace with a secret key for session management
    resave: false,
    saveUninitialized: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "routification",
});

//Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to the database");
  }
});
app.use(bodyParser.urlencoded({ extended: true }));

// run css
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "src")));

//run html
app.get("/", (req, res) => {
  console.log("direname is ", __dirname);
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/user.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/views/signup.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/views/login.html"));
});

//form event from table
app.post("/user", (req, res) => {
  const formData = req.body; // Get the parsed JSON data from the request body
  console.log("data from table ", formData);

  for (const key in formData) {
    if (formData[key] === "") {
      formData[key] = "NULL"; // Replace empty strings with "no value"
    }
  }
  console.log("after setting null value: ", formData);
  let td_r0_c1 = formData.td_r0_c1;
  let td_r0_c2 = formData.td_r0_c2;
  let td_r0_c3 = formData.td_r0_c3;
  let td_r0_c4 = formData.td_r0_c4;
  let td_r0_c5 = formData.td_r0_c5;

  let td_r1_c1 = formData.td_r1_c1;
  let td_r1_c2 = formData.td_r1_c2;
  let td_r1_c3 = formData.td_r1_c3;
  let td_r1_c4 = formData.td_r1_c4;
  let td_r1_c5 = formData.td_r1_c5;

  let td_r2_c1 = formData.td_r2_c1;
  let td_r2_c2 = formData.td_r2_c2;
  let td_r2_c3 = formData.td_r2_c3;
  let td_r2_c4 = formData.td_r2_c4;
  let td_r2_c5 = formData.td_r2_c5;

  let td_r3_c1 = formData.td_r3_c1;
  let td_r3_c2 = formData.td_r3_c2;
  let td_r3_c3 = formData.td_r3_c3;
  let td_r3_c4 = formData.td_r3_c4;
  let td_r3_c5 = formData.td_r3_c5;

  let td_r4_c1 = formData.td_r4_c1;
  let td_r4_c2 = formData.td_r4_c2;
  let td_r4_c3 = formData.td_r4_c3;
  let td_r4_c4 = formData.td_r4_c4;
  let td_r4_c5 = formData.td_r4_c5;

  let td_r5_c1 = formData.td_r5_c1;
  let td_r5_c2 = formData.td_r5_c2;
  let td_r5_c3 = formData.td_r5_c3;
  let td_r5_c4 = formData.td_r5_c4;
  let td_r5_c5 = formData.td_r5_c5;

  let td_r6_c1 = formData.td_r6_c1;
  let td_r6_c2 = formData.td_r6_c2;
  let td_r6_c3 = formData.td_r6_c3;
  let td_r6_c4 = formData.td_r6_c4;
  let td_r6_c5 = formData.td_r6_c5;

  let td_r7_c1 = formData.td_r7_c1;
  let td_r7_c2 = formData.td_r7_c2;
  let td_r7_c3 = formData.td_r7_c3;
  let td_r7_c4 = formData.td_r7_c4;
  let td_r7_c5 = formData.td_r7_c5;

  const time = [td_r0_c1, td_r0_c2, td_r0_c3, td_r0_c4, td_r0_c5];

  const saturday = [td_r1_c1, td_r1_c2, td_r1_c3, td_r1_c4, td_r1_c5];

  const sunday = [td_r2_c1, td_r2_c2, td_r2_c3, td_r2_c4, td_r2_c5];

  const monday = [td_r3_c1, td_r3_c2, td_r3_c3, td_r3_c4, td_r3_c5];

  const tuesday = [td_r4_c1, td_r4_c2, td_r4_c3, td_r4_c4, td_r4_c5];

  const wednesday = [td_r5_c1, td_r5_c2, td_r5_c3, td_r5_c4, td_r5_c5];

  const thursday = [td_r6_c1, td_r6_c2, td_r6_c3, td_r6_c4, td_r6_c5];

  const friday = [td_r7_c1, td_r7_c2, td_r7_c3, td_r7_c4, td_r7_c5];

  const query =
    "INSERT INTO routineData (time, saturday,sunday,monday,tuesday,wednesday,thursday,friday) VALUES (?,?, ?, ?,?,?,?,?)";

  // Join the arrays into comma-separated strings for insertion
  const timeValues = time.join(", ");
  const saturdayValues = saturday.join(", ");
  const sundayValues = sunday.join(", ");
  const mondayValues = monday.join(", ");
  const tuesdayValues = tuesday.join(", ");
  const wednesdayValues = wednesday.join(", ");
  const thursdayValues = thursday.join(", ");
  const fridayValues = friday.join(", ");

  const values = [
    timeValues,
    saturdayValues,
    sundayValues,
    mondayValues,
    tuesdayValues,
    wednesdayValues,
    thursdayValues,
    fridayValues,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
    } else {
      console.log("Data inserted successfully");
      //res.send("Thank you for submitting data");
      res.redirect("/user");
    }
  });

  // res.send("Thank you for submitting data");
});

// Add this code to your server.js

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if the user with the provided email and password exists in the database
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      // User not found, return an error response or redirect to signup
      return res.status(404).json({ error: "User not found. Please sign up." });
    } else {
      // User found, store user data in the session
      req.session.user = results[0]; // Assuming the first result is the user data

      // Redirect to /user
      res.redirect("/user");
    }
  });
});
// Define a route to handle requests for user data
app.get("/user-data", (req, res) => {
  // Check if the user is authenticated (check if user data is in the session)
  if (req.session.user) {
    // If authenticated, send the user data as JSON
    const userData = req.session.user;
    res.json(userData);
  } else {
    // If not authenticated, send an error response
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  // Check if the user with the provided email and username already exists in the database
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error querying the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length > 0) {
      // User with the provided email or username already exists, show the error message
      return res
        .status(400)
        .json({ error: "User already exists. Please log in." });
    } else {
      // User doesn't exist, insert the new user data into the database
      const insertQuery =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(insertQuery, [username, email, password], (err) => {
        if (err) {
          console.error("Error inserting data into the database:", err);
          console.log(err);
          return res.status(500).json({ error: "Internal server error" });
        }

        // User registered successfully
        res.redirect("/login");
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
