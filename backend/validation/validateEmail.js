const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEmail(email) {
  
  let emailerrors = {};

  // Convert empty fields to an empty string so we can use validator functions
  email = !isEmpty(email) ? email : "";

  // Email checks
  if (Validator.isEmpty(email)) {
    emailerrors.email = "Missing email";
  }
  return {
    emailerrors,
    emailisValid: isEmpty(emailerrors)
  };
};


