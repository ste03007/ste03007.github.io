const hamButton = document.querySelector(".ham");
const mainMenu = document.querySelector(".navigation");

hamButton.addEventListener(
  "click",
  () => {
    mainMenu.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) {
    mainMenu.classList.remove("responsive");
  }
};
const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentDate =
  dayName + ", " + todaysdate.getDate() + " " + monthName + " " + year;
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};

document.getElementById("currentDate").textContent = currentDate;

if (todaysdate.getDay() == 5) {
  document.querySelector("#prestonPancakes").style.display = "block";
}

//*image javascript*//
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
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
    this.firstName = firstName;
    this.lastName = lastName;
    this.answer = answer;
    this.zip = zip;
    this.country = country;
    this.email = email;
    this.comments = comments;
    }
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

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
function sendContact() {
    fields.answer= getAnswer();

    if (isValid()) {
    let usr = new User(firstName.value, lastName.value, fields.answer.value, zip.value, email.value);

    alert(`${usr.firstName}Thankyou for the Storm Information.`)

    } else {
    alert("ERROR")
    }
}
