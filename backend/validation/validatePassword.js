const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePassword(password) {
  let passworderrors = {};

  // Convert empty fields to an empty string so we can use validator functions
  password = !isEmpty(password) ? password : "";

  // Email checks
  if (Validator.isEmpty(password)) {
    passworderrors.email = "Failed password";
  }

  return {
    passworderrors,
    passwordisValid: isEmpty(passworderrors)
  };
};