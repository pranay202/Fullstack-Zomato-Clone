import express from 'express';

// Database Model
import { RestaurantModel } from "../../Database/allModels.js";

const Router = express.Router();

/*
Route                     /
Description               Get all the restaurants details
Params                    None
Access                    Public
Method                    Get
*/

Router.get("/", async (req, res) => {
    try {
        const {city} = req.query;
        restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /
Description               Get a particular restaurant details based on the _id
Params                    None
Access                    Public
Method                    Get
*/

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        restaurant = await RestaurantModel.findOne({ _id });
        if (!restaurant)
        return res.status(404).json({ error: "Restaurant not found" });
        else
        return res.json({ restaurant});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /
Description               Get restaurant details on search
Body                      searchString
Params                    None
Access                    Public
Method                    Get
*/
 
Router.get("/search", async (req, res) => {
    try {
        const { searchString } = req.body;

        const restaurants = await RestaurantModel.find({
            // regex is a substring which will searched in the names of restaurants
            name: {$regex: searchString, $options: "i"},
        });

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;