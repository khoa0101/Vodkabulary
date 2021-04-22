const Drink = require("../models/Drink");

function drinkSeeds(usersArr) {
  function randUserId() {
    let randIdx = Math.floor(Math.random() * usersArr.length);
    return usersArr[randIdx].id;
  }

  return [
    new Drink({
      user: randUserId(),
      title: "Martini",
      ingredients:
        "2 1/2 ounces gin or vodka, 1/2 ounce dry vermouth, 1/2 ounce olive brine, Garnish: 2 to 4 olives",
      directions:
        "Add the gin or vodka, vermouth and olive brine to a mixing glass filled with ice and stir until well-chilled. Strain into a chilled cocktail glass. Garnish with a skewer of olives.",
      photo: "",
      category: "vodka",
    }),
  ];
}

module.exports = drinkSeeds;
