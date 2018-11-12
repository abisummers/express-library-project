const express = require('express');

const Book = require("../models/book-model.js");

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/books", (req, res, next) => {
  Book.find()
    .then(bookResults => {
      // send the database query results to the HBS file as "bookArray"
      res.locals.bookArray = bookResults;
      res.render("book-list.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.get("/book/:bookId", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { bookId } = req.params;

  Book.findById(bookId)
    .then(bookDoc => {
      // send the database query results to the HBS file as "bookItem"
      res.locals.bookItem = bookDoc;
      res.render("book-details.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});


module.exports = router;
