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

});
