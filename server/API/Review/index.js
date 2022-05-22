// import express from 'express';

// // Database Model
// import { ReviewModel } from  "../../Database/allModels";

// const Router = express.Router();

// /*
// Route                 /new
// Description           Add new review
// Params                None
// BODY                  Review Object
// Access                Public
// Method                POSt
// */

// Router.post("/new", async (req, res) => {
//     try {
//         const { reviewData } = req.params
//         await ReviewModel.create(reviewData);

//         return res.json({review: "Successfully Created Review"});
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// /*
// Route                 /delete
// Description           Delete a review
// Params                _id
// Access                Public
// Method                Delete
// */

// Router.delete("/new/:_id", async (req, res) => {
//     try {
//         const { _id } = req.params;
//         await ReviewModel.findByIdAndDelete(_id);

//         return res.json({review: "Successfully Deleted Review"});
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// export default Router;

// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { ReviewModel } from "../../Database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get all review
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ restaurant: req.params.resid });
    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /new
Des       Add new food review/rating
Params    none
BODY      review object
Access    Public
Method    POST  
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { _id } = req.session.passport.user._doc;
    const { reviewData } = req.body;

    await ReviewModel.create({ ...reviewData, user: _id });

    return res.json({ review: "Sucessfully Created Review." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /delete
Des       Add new food review/rating
Params    _id
BODY      none
Access    Public
Method    DELETE  
*/
Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);

    return res.json({ review: "Sucessfully Deleted the Review." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;