import express from "express";
import { login, register } from "../control/auth";
import { getPasswords, saveHashed, savePlain } from "../control/user";

const userRoute = express.Router();

userRoute.post('/:userId', getPasswords);
userRoute.post('/:userId/savePlain', savePlain);
userRoute.post('/:userId/saveHashed', saveHashed);

export default userRoute;


