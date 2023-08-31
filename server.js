const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "routine",
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

//run html
app.get("/", (req, res) => {
  console.log("direname is ", __dirname);
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/user", (req, res) => {
  const formData = req.body; // Get the parsed JSON data from the request body
  console.log("data from table ", formData);
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

  let td_r3_c1 = formData.td_r3_c1;
  let td_r3_c2 = formData.td_r3_c2;

  let td_r4_c1 = formData.td_r4_c1;
  let td_r4_c2 = formData.td_r4_c2;

  let td_r5_c1 = formData.td_r5_c1;
  let td_r5_c2 = formData.td_r5_c2;

  let td_r6_c1 = formData.td_r6_c1;
  let td_r6_c2 = formData.td_r6_c2;

  let td_r7_c1 = formData.td_r7_c1;
  let td_r7_c2 = formData.td_r7_c2;

  const routine = [
    "Day/Time",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const class1 = [
    td_r0_c1,
    td_r1_c1,
    td_r2_c1,
    td_r3_c1,
    td_r4_c1,
    td_r5_c1,
    td_r6_c1,
    td_r7_c1,
  ];

  const class2 = [
    td_r0_c2,
    td_r1_c2,
    td_r2_c2,
    td_r3_c2,
    td_r4_c2,
    td_r5_c2,
    td_r6_c2,
    td_r7_c2,
  ];

  const query =
    "INSERT INTO routinedata (routine, class1, class2) VALUES (?, ?, ?)";

  // Join the arrays into comma-separated strings for insertion
  const routineValues = routine.join(", ");
  const class1Values = class1.join(", ");
  const class2Values = class2.join(", ");

  const values = [routineValues, class1Values, class2Values];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
    } else {
      console.log("Data inserted successfully");
      res.send("Thank you for submitting data");
    }
  });

  // Perform necessary database operations here, such as inserting the data into the database

  res.send("Thank you for submitting data");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
