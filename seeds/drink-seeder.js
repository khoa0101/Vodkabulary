const Drink = require("../models/Drink");

function drinkSeeds(usersArr) {
  const urlPreFix = "https://vodka-seeds.s3-us-west-1.amazonaws.com/";

  function randUserId() {
    let randIdx = Math.floor(Math.random() * usersArr.length);
    return usersArr[randIdx].id;
  }
  
  return [
    new Drink({
      user: randUserId(),
      title: "Martini",
      ingredients: "6 cl (6 parts) gin, 1 cl (1 parts) dry vermouth",
      directions:
        "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
      photo: urlPreFix + "martini.jpg",
      category: "gin",
    }),
    new Drink({
      user: randUserId(),
      title: "Michelada",
      ingredients:
        "beer, lime juice, assorted sauces (often chile-based), spices, tomato juice, and chile peppers",
      directions: "It is served in a chilled, salt-rimmed glass.",
      photo: urlPreFix + "michelada.jpg",
      category: "beer",
    }),
    new Drink({
      user: randUserId(),
      title: "Brandy Manhattan",
      ingredients:
        "5 cL Brandy, 2 cL Sweet red vermouth, Dash Angostura bitters",
      directions:
        "Stirred over ice, strained into a chilled glass, garnished, and served up.",
      photo: urlPreFix + "manhattancocktail.jpg",
      category: "brandy",
    }),
    new Drink({
      user: randUserId(),
      title: "Long Island Iced Tea",
      ingredients:
        "1.5 cl Tequila, 1.5 cl Vodka, 1.5 cl White rum, 1.5 cl Triple sec, 1.5 cl Gin, 2.5 cl Lemon juice, 3.0 cl simple syrup, Top with Cola",
      directions:
        "Add all ingredients into highball glass filled with ice. Stir gently. Optionally garnish with lemon slice",
      photo: urlPreFix + "longistalcedtea.jpg",
      category: "gin",
    }),
    new Drink({
      user: randUserId(),
      title: "Mai Tai",
      ingredients:
        "3 cl amber Jamaican rum, 3 cl Martinique molasses rum, 1.5 cl orange curaçao, 1.5 cl orgeat syrup, 3 cl fresh lime juice, .75 cl simple syrup",
      directions:
        "Shake all ingredients with ice. Pour unstrained into glass. Garnish and serve with straw.",
      photo: urlPreFix + "maitai.jpg",
      category: "rum",
    }),
    new Drink({
      user: randUserId(),
      title: "Pirate's Passion",
      ingredients: "Rum, passion fruit juice",
      directions:
        "Mix one part rum and two parts passioin fruit juice in a pirate's hat",
      photo: urlPreFix + "pirate.jpg",
      category: "rum",
    }),
    new Drink({
      user: randUserId(),
      title: "Margarita",
      ingredients:
        "5 cL (10 parts) tequila, 2 cL (4 parts) triple sec, 1.5 cL (3 parts), lime juice",
      directions:
        "Pour all ingredients into shaker with ice. Shake well and strain into cocktail glass rimmed with salt.",
      photo: urlPreFix + "margarita.jpg",
      category: "tequila",
    }),
    new Drink({
      user: randUserId(),
      title: "Tequila Sunrise",
      ingredients:
        "4.5 cl (3 parts) tequila, 9 cl (6 parts) orange juice, 1.5 cl (1 part) grenadine syrup",
      directions:
        "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
      photo: urlPreFix + "tequilasunrise.jpg",
      category: "tequila",
    }),
    new Drink({
      user: randUserId(),
      title: "Bloody Mary",
      ingredients:
        "4.5 cl (3 parts) vodka, 9 cl (6 parts) Tomato juice, 1.5 cl (1 part), Lemon juice, 2 to 3 dashes of Worcestershire Sauce, Tabasco sauce, Celery salt, Black pepper",
      directions:
        "Stirring gently, pour all ingredients into highball glass. Garnish.",
      photo: urlPreFix + "bloodymary.jpg",
      category: "vodka",
    }),
    new Drink({
      user: randUserId(),
      title: "Cosmopolitan",
      ingredients:
        "4 cl Vodka Citron, 1.5 cl Cointreau, 1.5 cl Fresh lime juice, 3 cl Cranberry juice",
      directions:
        "Shake all ingredients in cocktail shaker filled with ice. Strain into a large cocktail glass. Garnish with lime slice.",
      photo: urlPreFix + "cosmo.jpg",
      category: "vodka",
    }),
    new Drink({
      user: randUserId(),
      title: "Espresso Martini",
      ingredients:
        "5 cl vodka, 3 cl Kahlúa, 1 cl Sugar syrup, 1 strong espresso",
      directions:
        "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass.",
      photo: urlPreFix + "espressoMartini.jpg",
      category: "vodka",
    }),
    new Drink({
      user: randUserId(),
      title: "Irish coffee",
      ingredients:
        "4 cl (2 parts) Irish whiskey, 8 cl (4 parts) hot coffee, 3 cl (​1 1⁄2 parts), fresh cream, 1 tsp brown sugar",
      directions:
        "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
      photo: urlPreFix + "irishcoffee.jpg",
      category: "whiskey",
    }),
    new Drink({
      user: randUserId(),
      title: "Manhattan",
      ingredients:
        "5 cL Rye whiskey, 2 cL Sweet red vermouth, Dash Angostura bitters",
      directions:
        "Stirred over ice, strained into a chilled glass, garnished, and served up.",
      photo: urlPreFix + "manhattan.jpg",
      category: "whiskey",
    }),
    new Drink({
      user: randUserId(),
      title: "Whiskey sour",
      ingredients:
        "4.5 cl (3 parts) bourbon whiskey, 3 cl (2 parts) fresh lemon juice, 1.5 cl (1 part) simple syrup",
      directions:
        "Shake with ice. Strain into chilled glass, garnish and serve.",
      photo: urlPreFix + "whiskeysour.jpg",
      category: "whiskey",
    }),
    new Drink({
      user: randUserId(),
      title: "Old Fashioned",
      ingredients:
        "4.5 cl Bourbon or Rye whiskey, Few dashes Angostura bitters, 1 sugar cube, Few dashes plain water",
      directions:
        "Place sugar cube in old fashioned glass and saturate with bitters, add a few dashes of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange slice or zest, and a cocktail cherry.",
      photo: urlPreFix + "oldfashioned.jpg",
      category: "whiskey",
    }),
    new Drink({
      user: randUserId(),
      title: "Pisco sour",
      ingredients:
        "60ml Pisco, 30ml lemon juice, 20ml simple syrup, 1 egg white, aromatic bitters",
      directions:
        "Vigorously shake contents in a cocktail shaker with ice cubes, then strain into a glass and garnish with bitters.",
      photo: urlPreFix + "piscosour.JPG",
      category: "brandy",
    }),
    new Drink({
      user: randUserId(),
      title: "Bee's Knees",
      ingredients:
        "52.5ml Dry gin, 22.5ml lemon juice, 22.5ml orange juice, 2 teaspoons, honey syrup",
      directions:
        "Stir honey syrup with lemon and orange juices until it dissolves, add gin and shake with ice. Strain into chilled cocktail glass",
      photo: urlPreFix + "beesknees.jpg",
      category: "gin",
    }),
    new Drink({
      user: randUserId(),
      title: "Between the Sheets",
      ingredients:
        "3 cl white rum, 3 cl cognac, 3 cl triple sec, 2 cl fresh lemon juice",
      directions:
        "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
      photo: urlPreFix + "betweensheets.jpg",
      category: "rum",
    }),
  ];
}

module.exports = drinkSeeds;
