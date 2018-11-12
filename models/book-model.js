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
  author: { type: String, required: true, },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
}, {
  // additional settings for the Schema class
  timestamps: true,
});

// "Book" model -> "books" collection
const Book = mongoose.model("Book", bookSchema);


// make the "Book" model sharable to other files in the app
module.exports = Book;
