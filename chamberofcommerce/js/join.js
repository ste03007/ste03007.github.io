function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}
function isNumber(num) {
  return num.length > 0 && !isNaN(num);
}
function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
function isPasswordValid(password) {
  if (password.length > 5) {
    return true;
  }
  return false;
}
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}
function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.bName, isNotEmpty);
  valid &= fieldValidation(fields.address, isNotEmpty);
  valid &= fieldValidation(fields.member, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.cell, isNumber);
  valid &= fieldValidation(fields.password, isPasswordValid);
  valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
  valid &= fieldValidation(fields.descrip, isNotEmpty);
  valid &= arePasswordsEqual();

  return valid;
}
function arePasswordsEqual() {
  if (fields.password.value == fields.passwordCheck.value) {
    field.password.className = "placeholderRed";
    field.passwordCheck.className = "placeholderRed";
    return true;
  }
  return false;
}
class User {
  constructor(
    firstName,
    lastName,
    bName,
    address,
    member,
    email,
    diScount,
    descrip
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bname = bName;
    this.address = address;
    this.member = member;
    this.email = email;
    this.diScount = diScount;
    this.descrip = descrip;
  }
}
class User {
  constructor(
    firstName,
    lastName,
    address,
    member,
    email,
    diScount,
    descrip
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.bname = bName;
    this.member = member;
    this.email = email;
    this.discount = diScount;
    this.descrip = descrip;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  fields.firstName = document.getElementById("firstName");
  fields.lastName = document.getElementById("lastName");
  fields.email = document.getElementById("email");
  fields.cell = document.getElementById("cell");
  fields.bName = document.getElementById("bName");
  fields.address = document.getElementById("address");
  fields.member = document.getElementById("member");
  fields.diScount = document.getElementById("diScount");
  fields.descrip = document.getElementById("descrip");
});
