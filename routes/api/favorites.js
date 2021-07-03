const express = require("express");
const router = express.Router();
const passport = require("passport");
const Drink = require("../../models/Drink");
const User = require("../../models/User");


router.post('/', (req, res) => {
  const { drinkId, userId } = req.body;

  Drink.find({_id: drinkId})
  .then(drink => {
    drink = drink[0];
    drink.favorites.push(userId);
    drink.save().then(() => {
      Drink.find({_id: drinkId})
      .populate("user", "username")
      .populate("favorites", 'username')
      .then(drink => {
        res.json(drink)
      })
    })
  })
})

router.delete('/:userId', (req, res) => {
  res.json({msg: "hello"});
})

module.exports = router;