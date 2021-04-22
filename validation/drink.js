const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateDrinkInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.category = validText(data.category) ? data.category : "";
  data.directions = validText(data.directions) ? data.directions : "";
  // validate ingredients later

  if (Validator.isEmpty(data.title)) {
    errors.title = "title field is required";
  }
  if (Validator.isEmpty(data.category)) {
    errors.category = "category field is required";
  }
  if (!Validator.isIn(data.category, ["vodka", "rum", "whiskey", "gin", "tequila", "beer", "brandy"])) {
    errors.category = "category must contain vodka, rum, whiskey, gin, tequila ";
  }
  if (Validator.isEmpty(data.directions)) {
    errors.directions = "directions field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
