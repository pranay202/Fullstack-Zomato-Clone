import express from "express";
import bcrypt from "bcrypt";

import { UserModel } from "../../Database/allModels";

const Router = express.Router();

/* 
Route               /Signup
Description         Signup with email and password
Params              None
Access              Public
Method              POST
*/

Router.post("/signup", async (req, res) => {
    try {
        const { fullname, email, password, phoneNumber } = req.body.credentials;

        // check whether email or phoneNumber exists or not
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({error: "User already Exists!"});
        }

        //hashing and salting
        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //DB
        await UserModel.create({
            ...req.body.credentials,
            password: hashedPassword,
        });
        //JWT Auth Token
        const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");

        return res.status(200).json({ token });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = Router;