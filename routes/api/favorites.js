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
      .then((drink) => res.json(drink));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { drinkId, userId } = req.body;

    Drink.find({ _id: drinkId }).then((drink) => {
      drink = drink[0];
      drink.favorites.push(userId);
      drink.save().then(() => {
        Drink.find({ _id: drinkId })
          .populate("user", "username")
          .populate("favorites", "username")
          .then((drink) => {
            res.json(drink);
          });
      });
    });
  }
);

router.delete(
  "/:drinkId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userId } = req.body;
    const { drinkId } = req.params;

    Drink.findById(drinkId).then((drink) => {
      drink.favorites.pull(userId);
      return drink.save().then(() => {
        Drink.find({ _id: drinkId })
          .populate("user", "username")
          .populate("favorites", "username")
          .then((drink) => {
            res.json(drink);
          });
      });
    });
  }
);

module.exports = router;
