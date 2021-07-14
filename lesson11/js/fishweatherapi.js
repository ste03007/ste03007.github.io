

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=dd99eea42d98bdd2c3700a8b64a66250";
fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('tempF').textContent = jsObject.main.temp;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    document.getElementById ('current').textContent = jsObject.weather[0].description;
  });
  function windChill(tempF, windSpeed) {
    return  35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempF * Math.pow(windSpeed, 0.16);
  }
  let tempF =  weatherData.main.temp; // in the future this will be replaced with data from a third party - openweathermap
  let windSpeed = weatherData.wind.speed; // will be replaced as well
  let wchill = 35.74 + 0.6215 * tempF - 35.75 * windSpeed ** 0.16 + 0.4275 * tempF * windSpeed ** 0.16;

  document.querySelector('#windchill').innerHTML = wchill;
