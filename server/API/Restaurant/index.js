import express from "express";
//Database Model
import { RestaurantModel } from "../../Database/allModels.js";
//validations
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../Validation/restaurant";
import {ValidateRestaurantId } from "../../Validation/food";

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
        await ValidateRestaurantCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({ city});
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

Router.get("/:id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne({ _id });
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
Description               Get restaurant details search
Params                    searchString
Access                    Public
Method                    Get
*/
 
Router.get("/search", async (req, res) => {
    try {
        await ValidateRestaurantSearchString(req.body);

        const { searchString } = req.body;

        const restaurant = await RestaurantModel.find({
            // regex is a substring which will searched in the names of restaurants
            name: {$regex: searchString, $options: "i"},
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;