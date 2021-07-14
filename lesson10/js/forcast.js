let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=";

let cityIdentification = "5604473";

let APIkey = "dd99eea42d98bdd2c3700a8b64a66250";

let requestedURL = forecastURL + cityIdentification + "&appid=" + APIkey;

console.log(requestedURL)

const weatherURL = requestedURL;
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let forecast_temps = document.querySelectorAll(".temp");
        let forecast_dow = document.querySelectorAll(".dow");
        let forecast_icon = document.querySelectorAll(".icons");
        const DAY = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
        let forecast_number = 0;

        let list = jsObject.list;

        for (item of list) {
            if (item.dt_txt.includes('18:00:00')) {
                let date = new Date(item.dt * 1000);

                forecast_dow[forecast_number].innerHTML = DAY[date.getDay()];
                forecast_temps[forecast_number].innerHTML = item.main.temp.toFixed(0);

                let imagesrc = "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
                forecast_icon[forecast_number].setAttribute("src", imagesrc);
                forecast_icon[forecast_number].setAttribute("alt", imagesrc);
                forecast_number++;
            }
        }
    });