import express from "express";

//Database Model
import { UserModel } from "../../Database/allModels";

const Router = express.Router();

/*
Route                 /_id
Description           Get an User data
Params                _id
BODY                  none
Access                Public
Method                Get
*/

Router.post("/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        const getUser = await UserModel.findById(_id)

        return res.json({user: getUser});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                 /update
Description           Update the User data
Params                _userId
BODY                  user data
Access                Public
Method                PUT
*/

Router.put("/update/:_userId", async (req, res) => {
    try {
        const { userId } = req.params
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            {
                $set: userData
            },
            {
                new: true
            }
        );

        return res.json({user: updateUserData});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;