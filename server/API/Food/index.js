// Libraries
import express from 'express';
// import passport from 'passport';

//Database Model
import { FoodModel } from '../../Database/allModels';

//validations
import { ValidateRestaurantId, ValidateCategory } from '../../Validation/food';

const Router = express.Router();

/*
Route                     /
Description               Get all the food based on  a particular restaurant
Params                    _id
Access                    Public
Method                    Get
*/

Router.get("/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });
        
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                     /r
Description               Get all the foods based on particular category
Params                    category
Access                    Public
Method                    Get
*/

Router.get("/r/:category", async (req, res) => {
    try {
        await ValidateCategory(req.params);
        const {category} = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" }
        });
        
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;