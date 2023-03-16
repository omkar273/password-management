import express from "express";
import { login, register } from "../control/auth.js";

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);

export default authRoute;












