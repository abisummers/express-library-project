// Seed File (whenever you run this it will insert documents into the DB)
// -----------------------------------------------------------------------------
// COMMAND TO RUN: node bin/seed.js
const mongoose = require("mongoose");

const Book = require("../models/book-model.js");
const Author = require("../models/author-model.js");


mongoose // MAKE SURE the database name is the SAME as in APP.JS
  .connect('mongodb://localhost/express-library-project', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const bookData = [
  {
    title: "The Hunger Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 10,
    author: {
      firstName: "Suzanne",
      lastName: "Collins",
      nationality: "American",
      birthday: new Date(1962,07,11),
      pictureUrl: "https://www.thefamouspeople.com/profiles/images/suzanne-collins-3.jpg"
    },
  },
  {
    title: "Harry Potter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 9,
    author: {
      firstName: "Joanne",
      lastName: "Rowling",
      nationality: "English",
      birthday: new Date(1965,06,31),
      pictureUrl: "https://www.biography.com/.image/t_share/MTE4MDAzNDE3OTI3MDI2MTkw/jk-rowling_editedjpg.jpg"
    },
  },
  {
    title: "To Kill a Mockingbird",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 8,
    author: {
      firstName: "Harper",
      lastName: "Lee",
      nationality: "American",
      birthday: new Date(1926,03,28),
      pictureUrl: "https://cdn.cnn.com/cnnnext/dam/assets/150710115858-harper-lee-c1-exlarge-169.jpg"
    },
  },
  {
    title: "Pride and Prejudice",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 9,
    author: {
      firstName: "Jane",
      lastName: "Austen",
      nationality: "English",
      birthday: new Date(1817,11,16),
      pictureUrl: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg"
    },
  },
  {
    title: "Twilight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 10,
    author: {
      firstName: "Stephenie",
      lastName: "Meyer",
      nationality: "American",
      birthday: new Date(1973,11,24),
      pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stephenie_Meyer_by_Gage_Skidmore.jpg/1200px-Stephenie_Meyer_by_Gage_Skidmore.jpg"
    },
  },
  {
    title: "The Book Thief",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 7,
    author: {
      firstName: "Markus",
      lastName: "Zusak",
      nationality: "Australian",
      birthday: new Date(1975,05,23),
      pictureUrl: "https://images.penguinrandomhouse.com/author/59222"
    },
  },
  {
    title: "The Chronicles of Narnia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 8,
    author: {
      firstName: "Suzanne",
      lastName: "Lewis",
      nationality: "British",
      birthday: new Date(1898,10,29),
      pictureUrl: "https://media1.britannica.com/eb-media/24/82724-004-C01DBECB.jpg"
    },
  },
  {
    title: "Animal Farm",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 9,
    author: {
      firstName: "George",
      lastName: "Orwell",
      nationality: "Indian",
      birthday: new Date(1903,05,25),
      pictureUrl: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTMzNjI4OTQw/george-orwell-9429833-1-4022.jpg"
    },
  },
  {
    title: "Gone with the Wind",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 10,
    author: {
      firstName: "Margaret",
      lastName: "Mitchell",
      nationality: "American",
      birthday: new Date(1900,10,08),
      pictureUrl: "https://media1.britannica.com/eb-media/13/153113-004-8474546E.jpg"
    },
  },
  {
    title: "The Fault in Our Stars",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 8,
    author: {
      firstName: "John",
      lastName: "Green",
      nationality: "American",
      birthday: new Date(1977,07,24),
      pictureUrl: "https://i.guim.co.uk/img/media/8a5dc5e279a570fdba282c88d4a2a363a38bc2e4/0_96_4768_2860/master/4768.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=33c90ed86c41e7d9e2a4297936a2e504"
    },
  },
];


bookData.forEach(oneBook => {
  // for each book save the AUTHOR first
  Author.create(oneBook.author)
    .then(authorDoc => {
      console.log(`Create AUTHOR ${authorDoc.firstName} ${authorDoc.lastName}`);

      // set the author's ObjectId in the book to make the reference
      oneBook.author = authorDoc._id;
      // now save the BOOK since we have the author's ID
      Book.create(oneBook)
        .then(bookDoc => {
          console.log(`Created BOOK ${bookDoc.title}`);
        })
        .catch(err => {
          console.log("BOOK Create FAIL!! 🤬", err);
        });
    })
    .catch(err => {
      console.log("AUTHOR Create FAIL!! 💩", err);
    });
});
