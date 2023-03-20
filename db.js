import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  port:"5432",
  user:"postgres",
  password:"12345" ,
  database:"blog"
})

db.connect(function(err){
  if(err){
    throw err
  }else{
    console.log("Conexion existosa")
  }
})

db.end()