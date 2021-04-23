const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDrinkInput = require("../../validation/drink");
const Drink = require("../../models/Drink");
const upload = require("../../services/image_upload");
const uploadFile = require("../../services/image_upload");


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

    const {title, category, directions, ingredients} = req.body;

      // check if drink belongs user requesting the edit
      if (req.user.id != req.body.author){
        return res.status(400).json({ error: "cant update some another user's drink"})
      }

      Drink.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            title,
            directions,
            category,
            ingredients: ingredients.split(",").map((el) => el.trim()),
          },
        },
        { returnOriginal: false, useFindAndModify: false }
      )
        .then((drink) => res.status(200).send(drink))
        .catch((err) => status(404).json({ error: err }));
  }
);

// Create a drink
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  uploadFile,
  (req, res) => {
    if (req.file) {
      const { isValid, errors } = validateDrinkInput(req.body);
      
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newDrink = new Drink({
        user: req.user.id,
        title: req.body.title,
        category: req.body.category,
        ingredients: req.body.ingredients.split(",").map((el) => el.trim()),
        directions: req.body.directions,
        photo: req.file.location,
      });

      newDrink.save().then((drink) => res.json(drink));
    } else {
       return res.status(400).json({error: 'Drink image required'});
    }
  }
);

module.exports = router;
