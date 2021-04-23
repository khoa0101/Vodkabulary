const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const db = require("../config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

// An array of instances of users
const users = require('./user-seeder'); 

// A function that will recieve users to attach users to a drink
let drinks = require('./drink-seeder'); 
// A function that will recieve users and drinks to create a review belonging to an author
let reviews = require('./review-seeder');

drinks = drinks(users);
reviews = reviews(users, drinks);

// drink ingredients needs to be processed before saving
drinks.forEach(drink => {
  drink.ingredients = drink.ingredients[0].split(",").map((el) => el.trim());
});

// Want to stop the connection to mongodb AFTER all instances have been saved to db
let done = 0;
let totalLength = users.length + drinks.length + reviews.length;

// users need their passwords salted and hashed before saving, else you can't login
users.forEach((user) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
      user.save().then((user) => {
        done++;
        if (done === totalLength) {
          exit();
        }
      });
    });
  });
});


drinks.forEach((drink) => {
  drink.save((err, result) => {
    done++;
    if (done === totalLength) {
      exit();
    }
  });
});

reviews.forEach((review) => {
  review.save((err, result) => {
    done++;
    if (done === totalLength) {
      exit();
    }
  });
});

function exit() {
  mongoose.disconnect();
}