let section = document.getElementById('places');
                    let requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
                    let request = new XMLHttpRequest();
                    request.open('GET', requestURL);
                    request.responseType = 'json';
                    request.send();
                    request.onload = function() {
                    let southPlace = request.response;
                    idahoPlace(southPlace);
                function idahoPlace(jsonObj) {
                let place = jsonObj['towns'];
                for (let i = 0; i < place.length; i++) {
                    if (place[i].name=="Preston" || place[i].name=="Soda Springs" || place[i].name=="Fish Haven"){
                    let article = document.createElement('article');
                    let h2 = document.createElement('h2');
                    let h4 = document.createElement('h4');
                    let paragraph1 = document.createElement('p');
                    let paragraph2 = document.createElement('p');
                    let paragraph3 = document.createElement('p');
                    let paragraph4 = document.createElement('p');
                    let phoTo = document.createElement('img');

                    h2.textContent = place[i].name;
                    h4.textContent = place[i].motto;
                    paragraph1.textContent = 'Year Founded: ' + place[i].yearFounded;
                    paragraph2.textContent = 'Population: ' + place[i].currentPopulation;
                    paragraph3.textContent = 'Annual Rain Fall:' + place[i].averageRainfall;
                    phoTo.src = 'images/image'+ i + '.jpeg';

                    article.appendChild(h2);
                    article.appendChild(h4);
                    article.appendChild(paragraph1);
                    article.appendChild(paragraph2);
                    article.appendChild(paragraph3);
                    article.appendChild(phoTo);
                    article.appendChild(paragraph4);

                    section.appendChild(article);
                }}
            }}