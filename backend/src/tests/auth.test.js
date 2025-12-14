import request from "supertest";
import app from "../app.js";

describe("Auth API", () => {

  it("should register a new user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "password123"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.email).toBe("test@example.com");
  });

  it("should not allow duplicate email registration", async () => {
    // First registration
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "User One",
        email: "duplicate@example.com",
        password: "password123"
      });

    // Second registration with same email
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "User Two",
        email: "duplicate@example.com",
        password: "password123"
      });

    expect(response.statusCode).toBe(409);
  });

  it("should fail if the required field are missing", async ()=>{
    const response = await request(app)
    .post("/api/auth/register")
    .send({
      email: "nofields@example.com"
      // name and password are missing
    });

    expect(response.statusCode).toBe(400);
  })

  it("should login user with valid credentials", async () => {
    // first register user
    await request(app)
      .post("/api/auth/register")
      .send({
        name: "Login User",
        email: "login@example.com",
        password: "password123"
      });

    // then login
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "login@example.com",
        password: "password123"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });



});
