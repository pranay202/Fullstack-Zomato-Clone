import express from 'express';
import { OrderModel } from '../../Database/allModels';

const Router = express.Router();

/*
Route                 /
Description           Get all the orders based on _id
Params                _id
Access                Public
Method                GET
*/

Router.get("/:_id", async (req, res)=> {
    try {
        const { _id } = req.params;
        const getOrders = await OrderModel
    } catch (error) {
        
    }
})