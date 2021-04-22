const Review = require("../models/Review");

function drinkSeeds(usersArr) {

  function randUserId() {
    let randIdx = Math.floor(Math.random() * usersArr.length);
    return usersArr[randIdx].id;
  }

  return [
    new Review({
      user: randUserId(),
 
    })
  ];
}

module.exports = drinkSeeds;
