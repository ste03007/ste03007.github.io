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

if (thedate.getDay() == 5) {
    document.querySelector("prestonPancakes").style.display = 'block';
}