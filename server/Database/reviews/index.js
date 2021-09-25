import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref:"Foods"},
    user: {type: mongoose.Types.ObjectId, ref:"Users"},
    restaurant: {type: mongoose.Types.ObjectId, ref:"Restaurants"},
    rating: {type: Number, required: true},
    reviewText:{type: String, required: true},
    photos: [{type: mongoose.Types.ObjectId, ref: "Images"}]
},
{
    timestamps: true
});

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);