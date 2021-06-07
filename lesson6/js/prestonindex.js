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
function windChill(t, s) {
  return  35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}

let tempF = 49; // in the future this will be replaced with data from a third party - openweathermap
let windSpeed = 5; // will be replaced as well
let wchill = "N/A";

if (tempF < 50 && windSpeed > 3) {
  wchill = windChill(tempF, windSpeed)
  wchill = wchill.toFixed(1) + "&#176;F";
}

document.querySelector("#windchill").innerHTML = wchill;