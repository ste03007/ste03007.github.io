let section = document.getElementById("directorys");
let requestURL = "https://ste03007.github.io/chamberofcommerce/business.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  let southdec = request.response;
  idahodec(southdec);
  function idahodec(jsonObj) {
    let directory = jsonObj["business"];
    for (let i = 0; i < directory.length; i++) {
      if (
        directory[i].name == "Auto" ||
        directory[i].name == "Pre" ||
        directory[i].name == "Ste"
      ) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let paragraph = document.createElement("p");
        let paragraph1 = document.createElement("p");
        let paragraph2 = document.createElement("p");
        let paragraph3 = document.createElement("p");
        let paragraph4 = document.createElement("p");

        h2.textContent = directory[i].business_name;
        paragraph1.textContent = directory[i].address;
        paragraph2.textContent = "Street: " + directory[i].street;
        paragraph3.textContent = "City: " + directory[i].city;
        paragraph4.textContent = "State:" + directory[i].state;
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
