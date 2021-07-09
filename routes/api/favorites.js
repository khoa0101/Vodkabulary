const express = require("express");
const router = express.Router();
const passport = require("passport");
const Drink = require("../../models/Drink");

router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Drink.find({ favorites: req.params.userId })
      .populate("user", "username")
      .populate("favorites", "username")
      .then((drinks) => res.json(drinks));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { drinkId, userId } = req.body;
    console.log(drinkId, userId);

    Drink.find({ _id: drinkId }).then((drink) => {
      drink = drink[0];
      drink.favorites.push(userId);
      drink.save().then(() => {
        Drink.find({ _id: drinkId })
          .populate("user", "username")
          .populate("favorites", "username")
          .then((drink) => {
            res.json(drink[0]);
          });
      });
    });
  }
);

router.delete(
  "/:drinkId/:userId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { drinkId, userId } = req.params;
    Drink.findById(drinkId).then((drink) => {
      drink.favorites.pull(userId);
      return drink.save().then(() => {
        Drink.find({ _id: drinkId })
          .populate("user", "username")
          .populate("favorites", "username")
          .then((drink) => {
            res.json(drink[0]);
          });
      });
    });
  }
);

module.exports = router;
