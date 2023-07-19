import  request  from "supertest";
import app from "../index.js"

describe("GET /tasks", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/").send();
      expect(response.statusCode).toBe(200);
    });
  
    // test("should respond an array", async () => {
    //   const response = await request(app).get("/tasks").send();
    //   expect(response.body).toBeInstanceOf(Array);
    // });
  });