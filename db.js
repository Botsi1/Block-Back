import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"12345" ,
  database:"mynigth"
})

db.connect(function(err){
  if(err){
    throw err
  }else{
    console.log("Conexion existosa")
  }
})

db.end()