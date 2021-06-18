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
