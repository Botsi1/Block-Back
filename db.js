import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"user",
  password:"12345" ,
  database:"blog"
})