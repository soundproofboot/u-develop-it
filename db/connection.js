const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // your mysql username
    user: "soundproofboot",
    // your mysql password
    password: "upicmemberservices",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
