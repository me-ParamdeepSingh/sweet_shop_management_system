import express from "express"
const authRoute = express.Router()
import userController from "../controllers/authController.js";

authRoute.post('/register', userController.register);
authRoute.post('/login', userController.login);

export default authRoute;