const requestURL = 'https://zannamai.github.io/Finale-Project-WDD230/json/temples.json'
let temples = null;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });
        function displayTemples(temples) {

            let card = document.createElement('section');
            let image = document.createElement('img');
            let name = document.createElement('h2');
            let address = document.createElement('span');
            let telephone = document.createElement('span');
            let website = document.createElement('a');
            name.textContent = temples.name;
            address.textContent = temples.address;
            telephone.textContent = temples.telephone;
            website.textContent = temples.website;
          
            image.setAttribute('alt', `Image of ${temples.name}`);
                   
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(telephone);
            card.appendChild(website);
           
            document.getElementById('cards').appendChild(card);
        
        }
