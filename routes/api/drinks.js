const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDrinkInput = require("../../validation/drink");
const Drink = require("../../models/Drink");

// Get all drinks sorted by latest
router.get("/", (req, res) => {
  Drink.find()
    .sort({ date: -1 })
    .then((drinks) => res.json(drinks))
    .catch((err) => res.status(400).json(err));
});

// GET a user's Drinks
router.get("/user/:user_id", (req, res) => {
  Drink.find({ user: req.params.user_id })
    .then((drinks) => res.json(drinks))
    .catch((err) => res.status(400).json(err));
});

// GET a Drink
router.get("/:id", (req, res) => {
  Drink.findById(req.params.id)
    .then((drink) => res.json(drink))
    .catch((err) => res.status(400).json(err));
});

// Delete a Drink
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Drink.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ successfuldelete: "Deleted successfully!" })
      )
      .catch((err) =>
        res.status(404).json({ error: "No drink found with that ID" })
      );
  }
);

// Update Drink
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateDrinkInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const {title, category, directions} = req.body;
    Drink.findOneAndUpdate(
      { _id: req.params.id },
         {
        $set: {
          title,
          directions,
          category,
        }},
      { returnOriginal: false, useFindAndModify: false })
      .then(drink =>res.status(200).send(drink))
      .catch(err => status(404).json({ error: err }))
  }
);

// Create a drink
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateDrinkInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newDrink = new Drink({
      user: req.user.id,
      title: req.body.title,
      category: req.body.category,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
    });

    newDrink.save().then((drink) => res.json(drink));
  }
);

module.exports = router;
