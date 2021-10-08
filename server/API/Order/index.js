import express from 'express';
import passport from 'passport';


// Database Model
import { OrderModel } from '../../Database/allModels';

const Router = express.Router();

/*
Route                 /
Description           Get all the orders based on _id
Params                _id
Access                Public
Method                GET
*/

Router.get("/:_id", passport.authenticate("jwt", {session: false}), async (req, res)=> {
    try {
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({user:_id});

        if(!getOrders) {
            return res.status(404).json({error: "User not found"});
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                 /new
Description           Add new order
Params                _id
Access                Public
Method                GET
*/

Router.get("/new/:_id", async (req, res)=> {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true,
            }
        );

        if(!getOrders) {
            return res.status(404).json({error: "User not found"});
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;