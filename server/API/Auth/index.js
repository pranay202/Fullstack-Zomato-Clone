import express from "express";
import passport from "passport";
// import bcrypt from "bcrypt";

const jwt = require('jsonwebtoken');

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
        // const {  email, phoneNumber } = req.body.credentials;

        // used statics in User model so we are using methods here to access it.
        await UserModel.findEmailAndPhone(req.body.credentials);
        

        //hashing and salting
        // const bcryptSalt = await bcrypt.genSalt(8);

        // const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //DB ::::: Here below if we have to destructure things we need curly braces
        const newUser = await UserModel.create(
            req.body.credentials,
            // password: hashedPassword,
        );
        //JWT Auth Token
        const token = newUser.generateJwtToken();
        // const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");

        return res.status(200).json({ token });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/* 
Route               /Signin
Description         Signin with email and password
Params              None
Access              Public
Method              POST
*/

Router.post("/signin", async (req, res) => {
    try {
        // const {  email, phoneNumber } = req.body.credentials;
        // does user exixts
        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
            );
            
            //JWT Auth Token
            const token = user.generateJwtToken();
            // const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");
            
            return res.status(200).json({ token, status: "Success" });
            
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
    
    /* 
    Route               /google
    Description         Google Signin
    Params              None
    Access              Public
    Method              GET
    */

    Router.get("/google", passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    }))


    /* 
    Route               /google/callback
    Description         Google Signin callback for redirecting to Main page
    Params              None
    Access              Public
    Method              GET
    */

    Router.get("/google", passport.authenticate("google", {failureRedirect: "/"}),
    (req, res) => {
        return res.json({token: req.session.passport.user.token});
    });
module.exports = Router;