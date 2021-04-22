const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

const users = require('./user-seeder'); 
let drinks = require('./drink-seeder');
drinks = drinks(users);

let done = 0;
let totalLength = users.length + drinks.length;

users.forEach((user) => {
  user.save((err, result) => {
    done++;
    if (done === totalLength) {
      exit();
    }
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
