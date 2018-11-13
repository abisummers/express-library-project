const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// create model's schema using the Mongoose "Schema" class
const authorSchema = new Schema({
  // document structure & rules defined here
  firstName: { type: String, required: true },
  lastName: { type: String },
  nationality: { type: String, required: true },
  birthday: { type: Date },
  pictureUrl: { type: String, required: true },
}, {
  // additional settings for the Schema class
  timestamps: true,
});

// "Author" model -> "authors" collection
const Author = mongoose.model("Author", authorSchema);


// make the "Author" model sharable to other files in the app
module.exports = Author;
