const Review = require("../models/Review");

function drinkSeeds(usersArr, drinksArr) {
  function randUserId() {
    let randIdx = Math.floor(Math.random() * usersArr.length);
    return usersArr[randIdx].id;
  }
  function randDrinkId() {
    let randIdx = Math.floor(Math.random() * drinksArr.length);
    return drinksArr[randIdx].id;
  }

  return [
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "This goes well with steak!",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Had this on a trip to Hawaii, and I loved it!",
      rating: 5,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Needs sugar. :/",
      rating: 1,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Made it for my boyfriend, and he loved it.",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "It's a totally overrated drink",
      rating: 1,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "It's a good recipe, double the amount of alcohol for more enjoyment.",
      rating: 3,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "I was impressed with the ingredients, super easy to find.",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Need this everyday after work",
      rating: 5,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "I would add some lime to this and kick it up to the next level",
      rating: 3,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "I'm addicted to drinking these",
      rating: 5,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "One before work and one after work.",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Now that I work from home, I drink these on while reviewing my morning emails.",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Not great, a trashy drink.",
      rating: 2,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Made this for my mother on mother's day, she loved it!",
      rating: 5,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Honestly, any other drink is better.",
      rating: 1,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "I would give this 0 stars if I could",
      rating: 1,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "This lowkey tastes better at room temp.",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Just drink the alcohol, not worth mixning",
      rating: 1,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "I drink this every Tuesday with my tacos",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "decent cocktail, had it too many times",
      rating: 3,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Love this perfect for surprise guests",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Quick and easy",
      rating: 3,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "My secret hangover cure",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "I would add a celery stick to this.",
      rating: 3,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Love it after my morning run :)",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Had it at a party, it was ok",
      rating: 3,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "When I retire, I'm drinking one of these every day.",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Had too many times now, but it's good",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Perfect for a frat party",
      rating: 4,
    }),
    new Review({
      user: randUserId(),
      drinkId: randDrinkId(),
      body: "Great if you want to impress a lady",
      rating: 4,
    }),
  ];
}

module.exports = drinkSeeds;
