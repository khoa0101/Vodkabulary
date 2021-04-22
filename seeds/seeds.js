const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const db = require("../config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

const users = require('./user-seeder'); 
let drinks = require('./drink-seeder');
drinks = drinks(users);
drinks.forEach(drink => {
  drink.ingredients = drink.ingredients[0].split(",").map((el) => el.trim());
})

let done = 0;
let totalLength = users.length + drinks.length;

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

function exit() {
  mongoose.disconnect();
}