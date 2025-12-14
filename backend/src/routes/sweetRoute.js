import express from "express";
const sweetRoute = express.Router()
import sweetController from "../controllers/sweetController.js";


sweetRoute.post('/', sweetController.add);

export default sweetRoute;
