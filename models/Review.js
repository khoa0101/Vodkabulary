const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  drinkId: {
    type: Schema.Types.ObjectId,
    ref: "drink",
  },
  body: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("review", ReviewSchema);
module.exports = ReviewSchema;
