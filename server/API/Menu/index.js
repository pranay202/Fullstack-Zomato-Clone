// Libraries
import express from "express";

//Database Model
import { MenuModel, ImageModel } from "../../Database/allModels";

const Router = express.Router();

/*
Route                     /list
Description               Get the list of menus of a particular restaurant.
Params                    _id
Access                    Public
Method                    Get
*/

Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findOne({ _id });
        
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /image
Description               Get menu image based on id
Params                    _id
Access                    Public
Method                    Get
*/

Router.get("/image/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
        
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;