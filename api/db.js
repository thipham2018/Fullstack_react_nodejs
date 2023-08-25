import mysql2 from "mysql2"
// import cors from "cors"


export const db = mysql2.createConnection({
  host: "localhost",
  user: "trang",
  port: "3306",
  password: "12345",
  database: "blog"
})

// const cors = require("cors");
// app.use(cors());

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});


