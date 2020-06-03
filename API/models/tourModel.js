const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a price"],
    unique: true,
  },
  duration: {
    type: Number, 
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
      type: Number, 
      required: [true, 'A tour must have a group size']
  },
  difficulty: {
      type: String, 
      required: [true, 'A tour must have a difficulty']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
      type: Number,
      default: 0
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  priceDiscount: Number,
  summary: {
      type: String,
      trim: true // removes whitespaces. And works only on Strings
  },
  discount: {
      type: String, 
      trim: true
  },
  imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
  },
  createdAt: {
      type: Date,
      select: false,
      default: Date.now()
  },
  startDate: [Date]
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour