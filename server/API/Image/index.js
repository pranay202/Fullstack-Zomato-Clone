// import express from 'express';
// import AWS from 'aws-sdk';
// import multer from 'multer';

// //Database Model
// import { ImageModel } from "../../Database/allModels";

// //Utilities
// import {s3Upload} from "../../Utils/AWS/s3";

// const Router = express.Router();

// //config multer
// const storage = multer.memoryStorage();
// const upload = multer({storage});

// //AWS S3 bucket config
// // const s3Bucket = new AWS.S3({
// //     accessKeyId: process.env.AWS_S3_ACCESS_KEY,
// //     secretAccessKey: process.env.AWS_S3_SECRET_KEY,
// //     region: "ap-south-1"
// // });


// /* 
// Route               /
// Description         Uploading given image to S3 bucket, and then saving to MongoDB database
// Params              None
// Access              Public
// Method              POST
// */

// Router.post("/", upload.single("file"), async (req, res) => {
//     try {
//         const file = req.file;
        
//         //S3 Bucket Options
//         const bucketOptions = {
//             Bucket: "zomatomaster2001",
//             Key: file.originalname,
//             Body: file.buffer,
//             ContentType: file.mimetype,
//             ACL: "public-read"
//         };
        
//         // const s3Upload = (options) => {
//         //     return new Promise((resolve, reject) => {
//         //         s3Bucket.upload(options, (err, data) => {
//         //             if (error) return reject(error);
//         //             return resolve(data);
//         //         })
//         //     })
//         // };
        
//         const uploadImage = await s3Upload(bucketOptions);

//         return res.status(200).json({ uploadImage });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });

// export default Router;

// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../Database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "prajwalzomato1",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    await ImageModel.create({images: [{location: uploadImage.Location}]});

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


export default Router;
