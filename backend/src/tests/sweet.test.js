import request from "supertest";
import app from "../app.js";

describe("Sweet APIs", () => {
    it("should add new sweet", async () => {
        const response = await request(app)
            .post("/api/sweets")
            .send({
                name: "Gulab Jamun",
                category: "Indian",
                price: 20,
                quantity: 50
            })

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Gulab Jamun");
        expect(response.body.quantity).toBe(50);

    })

    it("should fail if required fields are missing", async () => {
        const response = await request(app)
            .post("/api/sweets")
            .send({
                name: "Barfi",
                price: 15
                // category & quantity missing
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBeDefined();
    });

    it("should not allow negative quantity", async () => {
        const res = await request(app)
            .post("/api/sweets")
            .send({
                name: "Rasgulla",
                category: "Indian",
                price: 10,
                quantity: -5
            });

        expect(res.statusCode).toBe(400);
    });

    it("should return all sweets", async () => {
        const response = await request(app).get("/api/sweets");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should search sweets by name", async () => {
        const response = await request(app)
            .get("/api/sweets/search?name=jamun");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should purchase a sweet", async () => {
        const res = await request(app)
            .post("/api/sweets/123/purchase")
            .send({ quantity: 2 });

        expect(res.statusCode).toBe(200);
    });



});