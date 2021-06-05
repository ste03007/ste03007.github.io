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