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

    const response = await request(app).get("/").send();
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