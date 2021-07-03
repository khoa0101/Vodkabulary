const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDrinkInput = require("../../validation/drink");
const Drink = require("../../models/Drink");
const aws = require("aws-sdk");
const keys = require('../../config/keys');
const uploadFile = require("../../services/image_upload");

router.get(
  "/search",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // credit: https://kb.objectrocket.com/mongo-db/mongoose-partial-text-search-606
    const titleResults = await Drink.find({
      title: { $regex: req.query.term, $options: "i" },
    });
    const ingredientsResults = await Drink.find({
      ingredients: { $regex: req.query.term, $options: "i" },
    });
    const categoryResults = await Drink.find({
      category: { $regex: req.query.term, $options: "i" },
    });

    const results = [
      ...titleResults,
      ...ingredientsResults,
      ...categoryResults,
    ];

    const resultMap = {};
    
    results.forEach(drink => {
      const drinkId = drink._id;
      resultMap[drinkId] = drink;
    });

    res.json(Object.values(resultMap));
  }
);

// Get all drinks sorted by latest
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Drink.find()
      .sort({ date: -1 })
      .populate("user", "username")
      .populate("favorites", 'username')
      .then((drinks) => res.json(drinks))
      .catch((err) => res.status(400).json(err));
  }
);

// GET a user's Drinks
router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Drink.find({ user: req.params.user_id })
      .populate("user", "username")
      .populate("favorites", 'username')
      .then((drinks) => res.json(drinks))
      .catch((err) => res.status(400).json(err));
  }
);

// GET a Drink
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Drink.findById(req.params.id)
      .populate("user", "username")
      .populate("favorites", 'username')
      .then((drink) => res.json(drink))
      .catch((err) => res.status(400).json(err));
  }
);

// Delete a Drink
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let drink = await Drink.findById(req.params.id);
    let key = drink.photo.split('/');
    key = key[key.length - 1];
    const s3 = new aws.S3({
      accessKeyId: keys.AWS_ACCESS_KEY_ID,
      secretAccessKey: keys.AWS_SECRET_KEY_ID,
      Bucket: keys.AWS_BUCKET,
    });
    s3.deleteObject(
      { Bucket: keys.AWS_BUCKET, Key: key },
      (err, data) => {
        if (err) {
          console.error(err);
          res.status(404).json({ error: err });
        }
        Drink.deleteOne({ _id: req.params.id })
          .then(() => {
            return res
              .status(200)
              .json({ msg: "Deleted successfully!", id: req.params.id });
          })
          .catch((err) =>
            res.status(404).json({ error: "No drink found with that ID" })
          );
        
      }
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

    req.body.ingredients = req.body.ingredients.split(",").map((item) => item.trim());
 

    // check if drink belongs user requesting the edit
    if (req.user.id != req.body.author){
      return res.status(400).json({ error: "cant update some another user's drink"})
    }

    Drink.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true, useFindAndModify: false }
    )
      .then((drink) => {
        (drink);
        return res.status(200).send(drink);
      })
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

      newDrink
        .save()
        .then((drink) => res.json(drink.populate("user", "username")));
    } else {
       return res.status(400).json({error: 'Drink image required'});
    }
  }
);

module.exports = router;
