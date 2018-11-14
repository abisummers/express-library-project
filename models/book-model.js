const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// create model's schema using the Mongoose "Schema" class
const bookSchema = new Schema({
  // document structure & rules defined here
  title: { type: String, required: true, },
  description: {
    type: String,
    required: true,
    minlength: 8,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author", // tells Mongoose this ID connects to the "Author" model
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  reviews: [{
    user: { type: String, required: true },
    comments: {
      type: String,
      required: true,
      maxlength: 200,
    },
  }],
}, {
  // additional settings for the Schema class
  timestamps: true,
});

// "Book" model -> "books" collection
const Book = mongoose.model("Book", bookSchema);


// make the "Book" model sharable to other files in the app
module.exports = Book;
