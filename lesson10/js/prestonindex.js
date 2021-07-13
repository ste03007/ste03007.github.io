const requestURL = https:/history.openweathermap.org/data/2.5/aggregated/year?id=5604473&appid={dd99eea42d98bdd2c3700a8b64a66250}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })