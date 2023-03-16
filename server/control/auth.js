import userModel from "../model/user.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken"


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) { return res.status(400).send(`User does not exist`) }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) { return res.status(400).send(`Invalid credentials`) }

        const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY_256_BIT, { expiresIn: '365d' });
        delete user.password;
        console.log(`user authenticated`);
        res.status(200).send(({ token, user }));

    } catch (error) {
        res.end(`Error in user login : ${error}`)
    }
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const userExist = await userModel.findOne({ email });

        if (userExist) res.send(`Account with same email already exist `)
        else {
            const newUser = new userModel({
                name,
                email,
                password: hashedPassword
            })

            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }

    } catch (error) {
        res.end(`Error in user login : ${error}`)
    }
}














