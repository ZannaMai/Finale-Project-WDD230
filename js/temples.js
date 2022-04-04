const requestURL = 'https://zannamai.github.io/Finale-Project-WDD230/json/temples.json'
const cards = document.getElementById('cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });
        function displayTemples(temples) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2')
            let picture = document.createElement('img');
            let info = document.createElement('p');
            
            h2.textContent = temples.name;
            info.innerHTML = `Address: ${temples.address} <br>
            Telephone: ${temples.telephone} <br>
            History: ${temples.history} <br>
            Schedule: ${temples.schedule} <br>
            Closures: ${temples.closure} `

            picture.setAttribute('src', temples.image);
            picture.setAttribute('alt', `Image of ${temples.name}`);


           // name.textContent = temples.name;
          //  address.textContent = temples.address;
           // telephone.textContent = temples.telephone;
           // history.textContent = temples.history;
           // schedule.textContent = temples.schedule;
           // closure.textContent = temples.closure; 
          
                   
            card.appendChild(h2);
            card.appendChild(info);
            card.appendChild(picture);

            cards.appendChild(card);
        
        }
