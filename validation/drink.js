const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateDrinkInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.category = validText(data.category) ? data.category : "";
  data.directions = validText(data.directions) ? data.directions : "";
  // validate ingredients later

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  if (!Validator.isIn(data.category, ["Vodka", "Rum", "Whiskey", "Gin", "Tequila"])) {
    errors.category = "Category must contain Vodka, Rum, Whiskey, Gin, Tequila ";
  }
  if (Validator.isEmpty(data.directions)) {
    errors.directions = "Directions field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
