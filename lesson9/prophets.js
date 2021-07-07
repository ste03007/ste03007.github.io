const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');

    h2.innerHTML = `${prophets[i].name}<span class="purple">${prophets[i].lastname}</span>`;
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt',`The offical portrait of  ${prophets[i].name} ${prophets[i].lastname}!`);
    image.style.boxShadow = '0 0 50px #444';


    card.append(h2);
    card.append(img);

    document.querySelector('div.cards').appendChild(card);
  }

  });