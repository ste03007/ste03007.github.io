const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (Response) {
    return Response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];

    const idaho = prophets.filter(prophet => prophet.birthplace == "Idaho");

     idaho.forEach(prophet => {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');

      h2.innerHTML = `${prophet.name}<span class="purple">${prophet.lastname}</span>`;
      image.setAttribute('src', `images/${town.photo}`);
      image.setAttribute('alt',`The offical portrait of  ${prophet.name} ${prophet.lastname}!`);

      card.append(h2);
      card.append(img);

      document.querySelector("div.cards").append(card);
    })

  });
