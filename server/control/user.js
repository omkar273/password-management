import userModel from "../model/user.js";
import bcrypt from "bcrypt";


export const getPasswords = async (req, res) => {
    try {

        console.log(`getUser called`);
        const { userId } = req.params;
        console.log(` id of user : ${userId}`);
        const user = await userModel.findById(userId);
        res.json(user);
    } catch (error) {
        console.log(`error in fetching user details : ${error}`);
        res.status(404).end(`error in fetching user details : ${error}`);
    }
}

export const savePlain = async (req, res) => {
    try {
        const { id, web_url, web_password } = req.body;
        const user = await userModel.findById(id);
        user.savedPlainPassword.push({ web_url, web_password });
        await user.save();
        res.json(user);

    } catch (error) {
        res.end(`Error in user login : ${error}`)
    }
}

export const saveHashed = async (req, res) => {
    try {
        const { id, web_url, web_password } = req.body;
        const user = await userModel.findById(id);

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(web_password, salt);

        user.savedHashedPassword.push({ web_url, hashedPassword });
        await user.save();
        res.json(user);

    } catch (error) {
        res.end(`Error in user login : ${error}`)
    }
}
