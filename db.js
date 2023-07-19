import mysql from "mysql"

 export const db = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"12345" ,
  database:"blog"
})

// db.connect(function(err){
//   if(err){
//     throw err
//   }else{
//     console.log("Conexion existosa")
//   }
// })




