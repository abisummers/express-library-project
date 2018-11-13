const express = require('express');

const Book = require("../models/book-model.js");
const Author = require("../models/author-model.js");

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/books", (req, res, next) => {
  Book.find()
    .populate("author") // "author" is the name of the ID in the schema
    .sort({ createdAt: -1 }) // sort by date (reverse order)
    .then(bookResults => {
      // send the database query results to the HBS file as "bookArray"
      res.locals.bookArray = bookResults;
      res.render("book-list.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

// This route must be ABOVE "/book/:bookId" (order matters with similar URLS)
router.get("/book/add", (req, res, next) => {
  res.render("book-form.hbs");
});

router.get("/book/:bookId", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { bookId } = req.params;

  Book.findById(bookId)
    .populate("author") // "author" is the name of the ID in the schema
    .then(bookDoc => {
      // send the database query results to the HBS file as "bookItem"
      res.locals.bookItem = bookDoc;
      res.render("book-details.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.post("/process-book", (req, res, next) => {
  // get the user inputs from inside "req.body"
  // (we use "req.body" because it's a POST form)
  const { title, author, description, rating } = req.body;

  // save user inputs in a new book document
  Book.create({ title, author, description, rating })
    .then(bookDoc => {
      // redirect if it's successful to avoid duplicate data from refreshes
      // (redirect ONLY to URLs - "/books" instead of "book-list.hbs")
      res.redirect("/books");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.get("/book/:bookId/delete", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { bookId } = req.params;

  // delete the document from the database
  Book.findByIdAndRemove(bookId)
    .then(bookDoc => {
      // redirect ONLY to URLs - "/books" instead of "book-list.hbs"
      res.redirect("/books");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.get("/book/:bookId/edit", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { bookId } = req.params;

  Book.findById(bookId)
    .then(bookDoc => {
      // send the database query results to the HBS file as "bookItem"
      res.locals.bookItem = bookDoc;
      res.render("book-edit.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});

router.post("/book/:bookId/process-edit", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { bookId } = req.params;

  // get the user inputs from inside "req.body"
  // (we use "req.body" because it's a POST form)
  const { title, author, description, rating } = req.body;

  // save user inputs in an existing book document
  Book.findByIdAndUpdate(
    bookId, // ID of the document to update
    { $set: { title, author, description, rating } }, // changes to be made to the document
    { runValidators: true } // additional settings
  )
  .then(bookDoc => {
    // redirect if it's successful to avoid duplicate data from refreshes
    // (redirect ONLY to URLs - `/book/${bookId}` instead of "book-details.hbs")
    res.redirect(`/book/${bookId}`);
  })
  // "next()" skips to the error handler in "bin/www"
  .catch(err => next(err));
});

router.get("/author/:authorId", (req, res, next) => {
  // get the ID from the URL (it's inside the "req.params" object)
  const { authorId } = req.params;

  Author.findById(authorId)
    .then(authorDoc => {
      // send the database query results to the HBS file as "authorItem"
      res.locals.authorItem = authorDoc;
      res.render("author-details.hbs");
    })
    // "next()" skips to the error handler in "bin/www"
    .catch(err => next(err));
});


module.exports = router;
