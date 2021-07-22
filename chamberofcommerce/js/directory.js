let section = document.getElementById("directory");
let requestURL = "https://github.com/ste03007/ste03007.github.io/blob/master/chamberofcommerce/directory.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  let southdec = request.response;
  idahodec(southdec);
  function idahodec(jsonObj) {
    let dec = jsonObj["towns"];
    for (let i = 0; i < dec.length; i++) {
      if (
        dec[i].name == "Auto" ||
        dec[i].name == "Pre" ||
        dec[i].name == "Ste"
      ) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let paragraph = document.createElement("p");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let paragraph3 = document.createElement("p");
        let paragraph4 = document.createElement("p");
        let myImg = document.createElement("img");

        h2.textContent = dec[i].name;
        paragraph1.textContent = dec[i].motto;
        paragraph2.textContent = "Year Founded: " + dec[i].yearFounded;
        paragraph3.textContent = "Population: " + dec[i].currentPopulation;
        paragraph4.textContent = "Annual Rain Fall:" + dec[i].averageRainfall;
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