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
    let dec = jsonObj["business"];
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

        h2.textContent = dec[i].business_name;
        paragraph1.textContent = dec[i].address;
        paragraph2.textContent = "Street: " + dec[i].street;
        paragraph3.textContent = "City: " + dec[i].city;
        paragraph4.textContent = "State:" + dec[i].state;
        article.appendChild(h2);
        article.appendChild(paragraph);
        article.appendChild(paragraph1);
        article.appendChild(paragraph2);
        article.appendChild(paragraph3);
        article.appendChild(paragraph4);

        section.appendChild(article);
      }
    }
  }
};