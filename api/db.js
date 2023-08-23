import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Danang2018",
  database: "blog"
})