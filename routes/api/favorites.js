const express = require("express");
const router = express.Router();
const passport = require("passport");
const Drink = require("../../models/Drink");


router.post('/', (req, res) => {
  // so here I want to add a user Id to the like property 
  // in the drink document. 
  const { drinkId, userId } = req.body;


  Drink.find({_id: drinkId}).then(drink => {
    favorites = drink[0].favorites
    console.log(favorites)
    favorites.push(userId);
    drink[0].save();
    res.json(favorites)
  })
  // res.json({drinkId, userId});
})

router.delete('/:userId', (req, res) => {
  res.json({msg: "hello"});
})

module.exports = router;