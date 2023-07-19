import  request  from "supertest";
import app from "../index.js"
import { db } from "../db.js";

describe("GET /tasks", () => {
  let dbConnected = false; // Variable para almacenar el estado de la conexión

  beforeAll((done) => {
    // Intentamos conectar a la base de datos
    db.connect((err) => {
      if (err) {
        console.error("Error al conectar a la base de datos:", err);
      } else {
        dbConnected = true; // Marcamos la conexión como exitosa
        console.log("Conexión exitosa");
      }
      done(); // Importante llamar a done() aquí para que Jest sepa que hemos terminado.
    });
  });

  
  test("Should verify succesfull conection to DataBase", () => {
    // Verificar si la conexión a la base de datos fue existosa antes de realizar la prueba
    expect(dbConnected).toBe(true);

  });

  test("should respond with a 200 status code", async () => {
    // Verificar si la conexión a la base de datos fue existosa antes de realizar la prueba
    const response = await request(app).get("/api/posts").send();
    expect(response.statusCode).toBe(200);
    expect(response.body.length>0).toBe(true)
  });





 

  // Resto de las pruebas...
});


describe("Post /tasks", () => {
  // Variable para almacenar el estado de la conexión

 

  test("should post a new article", async () => {
    // Verificar si la conexión a la base de datos fue existosa antes de realizar la prueba
    const post =
      {
        title: "hola mundo",
        desc: "como estan",
        img: "mi foto",
        cat: "anime",
        date: "\"23-67-33\"",
        uid: "2"
      }
    
    const response = await request(app).post("/api/posts").send(post).set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    
  });

  afterAll((done) => {
    // Cerrar la conexión a la base de datos después de que se completan todas las pruebas
    db.end((err) => {
      if (err) {
        console.error("Error al cerrar la conexión a la base de datos:", err);
      } else {
        console.log("Conexión cerrada correctamente");
      }
      done();
    });
  });
  

  


  // Resto de las pruebas...
});