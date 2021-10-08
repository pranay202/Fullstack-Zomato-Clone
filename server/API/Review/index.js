import express from 'express';

// Database Model
import { ReviewModel } from  "../../Database/allModels";

const Router = express.Router();

/*
Route                 /new
Description           Add new review
Params                None
BODY                  Review Object
Access                Public
Method                POSt
*/

Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.params
        await ReviewModel.create(reviewData);

        return res.json({review: "Successfully Created Review"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route                 /delete
Description           Delete a review
Params                _id
Access                Public
Method                Delete
*/

Router.post("/new", async (req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Successfully Deleted Review"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;