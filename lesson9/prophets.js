const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
  const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    h2.innerHTML = `${prophets[i].name}<span class="purple">${prophets[i].lastname}</span>`;

    card.appendChild(h2);

    document.querySelector('div.cards').appendChild(card);
  }

  });