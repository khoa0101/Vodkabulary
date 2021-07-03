const express = require("express");
const router = express.Router();
const passport = require("passport");
const Drink = require("../../models/Drink");
const User = require("../../models/User");


router.post('/', 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
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
});

router.delete('/:drinkId', (req, res) => {
  Drink.findById(req.params.drinkId)
    .then(drink => {
      drink.favorites.pull(req.body.userId);
      return drink.save().then(() => {
        Drink.find({_id: req.params.drinkId})
        .populate("user", "username")
        .populate("favorites", 'username')
        .then(drink => {
          res.json(drink)
        })
      })
    });
});

module.exports = router;