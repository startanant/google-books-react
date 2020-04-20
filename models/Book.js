const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  publishedDate: Date,
  description: String,
  averageRating: Number,
  ratingsCount: Number,
  image: String,
  infoLink: String,
  dateSaved: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;