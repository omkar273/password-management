import express from "express";
import { getPasswords, saveHashed, savePlain } from "../control/user.js";

const userRoute = express.Router();

userRoute.get('/:userId', getPasswords);
userRoute.post('/:userId/savePlain', savePlain);
userRoute.post('/:userId/saveHashed', saveHashed);

export default userRoute;


