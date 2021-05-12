const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateReviewInput = require("../../validation/review");
const Review = require("../../models/Review");

// Get a drinks reviews
router.get("/drink/:drinkId", (req, res) => {
  Review.find({ drinkId: req.params.drinkId })
    .populate("author", "username")
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json(err));
});

// GET a user's Reviews
router.get("/author/:user_id", (req, res) => {
  Review.find({ author: req.params.user_id })
    .populate("author", "username")
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json(err));
});

// GET a Review
router.get("/:id", (req, res) => {
  Review.findById(req.params.id)
    .populate("author", "username")
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json(err));
});

// Delete a Review
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Review.deleteOne({ _id: req.params.id })
      .then(() =>
        res.status(200).json({ successfuldelete: "Deleted successfully!" })
      )
      .catch((err) =>
        res.status(404).json({ error: "No review found with that ID" })
      );
  }
);

// Update Review
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateReviewInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Review.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body},
        { returnOriginal: false, useFindAndModify: false })
        .populate("author", "username")
        .then(review =>res.status(200).send(review))
        .catch(err => status(404).json({ error: err }))
    }
);

// Create a review
router.post(
  "/drink/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateReviewInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newReview = new Review({
      author: req.body.author,
      drinkId: req.params.id,
      body: req.body.body,
      rating: req.body.rating,
    });

    newReview.save().then((review) => {
      // finding the review to return a review with populated user info
      Review.find({ _id: review._id })
        .populate("author", "username")
        .then((review) => {
          res.json(review[0])});
    });
  }
);

module.exports = router;
