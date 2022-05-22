// import express from 'express';
// import passport from 'passport';


// // Database Model
// import { OrderModel } from '../../Database/allModels';

// const Router = express.Router();

// /*
// Route                 /
// Description           Get all the orders based on _id
// Params                _id
// Access                Public
// Method                GET
// */

// Router.get("/:_id", passport.authenticate("jwt", {session: false}), async (req, res)=> {
//     try {
//         const { _id } = req.params;
//         const getOrders = await OrderModel.findOne({user:_id});

//         if(!getOrders) {
//             return res.status(404).json({error: "User not found"});
//         }

//         return res.status(200).json({orders: getOrders});
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// /*
// Route                 /new
// Description           Add new order
// Params                _id
// Access                Public
// Method                GET
// */

// Router.get("/new/:_id", async (req, res)=> {
//     try {
//         const { _id } = req.params;
//         const { orderDetails } = req.body;
//         const addNewOrder = await OrderModel.findOneAndUpdate(
//             {
//                 user: _id
//             },
//             {
//                 $push: {orderDetails: orderDetails}
//             },
//             {
//                 new: true,
//             }
//         );

//         if(!getOrders) {
//             return res.status(404).json({error: "User not found"});
//         }

//         return res.status(200).json({ order: addNewOrder });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// export default Router;


import express from "express";

// Database Modals
import { OrderModal } from "../../Database/allModels";

const Router = express.Router();

Router.get("/:userID", async (req, res) => {
  try {
    const { userID } = req.params;

    const getOrders = await OrderModal.findOne({ user: userID });

    return res.json({ orders: getOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/new", async (req, res) => {
  try {
    const { orderData } = req.body;
    const updateOrders = await OrderModal.findByIdAndUpdate(
      orderData._id,
      {
        $push: { orderDetails: orderData.orderDetails },
      },
      { new: true }
    );
    
    return res.json({ orders: updateOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/review/new", async (req, res) => {
  try {
    const { orderData } = req.body;
    const updateOrders = await OrderModal.findByIdAndUpdate(
      orderData._id,
      {
        $set: { orderRating: orderData.orderRating },
      },
      { new: true }
    );
    return res.json({ orders: updateOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.patch("/update", async (req, res) => {
  try {
    const { orderData } = req.body;
    const updateOrders = await OrderModal.findOneAndUpdate(
      {
        _id: orderData._id,
        "orderDetails._id": orderData.order_id,
      },
      {
        $set: { "orderDetails.$.status": orderData.status },
      },
      { new: true }
    );

    return res.json({ orders: updateOrders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;