<<<<<<< HEAD
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
=======
const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function (data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
>>>>>>> 9bde762b0b68db06166a50aa2d5d307f3928ed5b
  }

  return {
    errors,
<<<<<<< HEAD
    isValid: Object.keys(errors).length === 0
  };
};
=======
    isValid: Object.keys(errors).length === 0,
  };
};
>>>>>>> 9bde762b0b68db06166a50aa2d5d307f3928ed5b
