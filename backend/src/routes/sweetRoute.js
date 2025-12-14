import express from "express";
const sweetRoute = express.Router()
import sweetController from "../controllers/sweetController.js";


sweetRoute.post('/', sweetController.add);
sweetRoute.get('/', sweetController.all_sweets);
sweetRoute.get("/search", sweetController.searchSweets);
sweetRoute.post("/:id/purchase", sweetController.purchase);


export default sweetRoute;
