import request from "supertest";
import app from "../app.js";

describe("Sweet APIs",()=>{
    it("should add new sweet", async ()=>{
        const response = await request(app)
        .post("/api/sweets")
        .send({
            name: "Gulab Jamun",
            category: "Indian",
            price: 20,
            quantity : 50
        })

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Gulab Jamun");
        expect(response.body.quantity).toBe(50);
        
    })
})