let section = document.getElementById("directory");
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  let southPlace = request.response;
  idahoPlace(southPlace);
  function idahoPlace(jsonObj) {
    let place = jsonObj["towns"];
    for (let i = 0; i < place.length; i++) {
      if (
        place[i].name == "Preston" ||
        place[i].name == "Soda Springs" ||
        place[i].name == "Fish Haven"
      ) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let paragraph = document.createElement("p");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let paragraph3 = document.createElement("p");
        let paragraph4 = document.createElement("p");
        let myImg = document.createElement("img");

        h2.textContent = place[i].name;
        paragraph1.textContent = place[i].motto;
        paragraph2.textContent = "Year Founded: " + place[i].yearFounded;
        paragraph3.textContent = "Population: " + place[i].currentPopulation;
        paragraph4.textContent = "Annual Rain Fall:" + place[i].averageRainfall;
        myImg.src = "images/sodasprings.jpg";
        article.appendChild(h2);
        article.appendChild(paragraph);
        article.appendChild(paragraph1);
        article.appendChild(paragraph2);
        article.appendChild(paragraph3);
        article.appendChild(paragraph4);
        article.appendChild(myImg);

        section.appendChild(article);
      }
    }
  }
};