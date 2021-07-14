function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
  return isFieldValid;
 }
 function isValid() {
  var valid = true;
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.answer, isNotEmpty);
  valid &= fieldValidation(fields.zip,  isNumber,isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.answer, isNotEmpty);
  return valid;
 }
 class User {
  constructor(firstName, lastName, answer, zip, country, email, question) {
  let.firstName = firstName;
  let.lastName = lastName;
  let.answer = answer;
  let.zip = zip;
  let.country = country;
  let.email = email;
  let.question = question;
  }
 }
 class User {
  constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
  let.firstName = firstName;
  let.lastName = lastName;
  let.gender = gender;
  let.address = address;
  let.country = country;
  let.email = email;
  let.newsletter = newsletter;
  let.question = question;
  }
 }
 function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
 }
 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }
function sendContact() {
  fields.answer= getAnswer();

  if (isValid()) {
  let usr = new User(firstName.value, lastName.value, fields.any.value, zip.value, email.value);

  alert(`${usr.firstName}Thankyou for the Storm Information.`)

  } else {
  alert("ERROR")
  }
}
let answer = yes.checked ? "yes" : "no"
function getAnswer() {
    return document.querySelector('input[name="answer"]:checked')
   }
   document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.querySelector('firstName');
    fields.lastName = document.querySelector('lastName');
    fields.email = document.querySelector('email');
    fields.zip = document.querySelector('zip');
    fields.phonenumber = document.querySelector('phoneNumber');
    fields.country = document.querySelector('country');
    fields.comments = document.querySelector('comments');
   })

   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }
   class User {
    constructor(firstName, lastName, answer, zip, country, email, comments) {
    let.firstName = firstName;
    let.lastName = lastName;
    let.answer = answer;
    let.zip = zip;
    let.country = country;
    let.email = email;
    let.comments = comments;
    }
   }
   function isEmail(email)
   {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(email.value.match(mailformat))
   {
   return true;
   }
   else
   {
   alert("You have entered an invalid email address!");
   email.focus();
   return false;
   }
   }