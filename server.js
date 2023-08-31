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
    "INSERT INTO routineData (time, saturday,sunday,monday,tuesday,wednesday,friday) VALUES (?, ?, ?,?,?,?,?)";

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
      res.send("Thank you for submitting data");
    }
  });

  // Perform necessary database operations here, such as inserting the data into the database

  res.send("Thank you for submitting data");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
