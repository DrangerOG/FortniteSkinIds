let bodyGliders = document.getElementById('Gliders');
fetch('https://fortnite-api.com/v2/cosmetics/br')
    .then(res => res.json())
    .then(data => {
        data.data.forEach(element => {
            if (element.type.value == 'glider') {
                let newCosmetic = document.createElement('tr')
                let imgCosmetic = document.createElement('td');
                let img = document.createElement('img');
                imgCosmetic.appendChild(img);
                img.src = element.images.icon;
                // img.style.backgroundColor = `${element.rarity.value}`
                newCosmetic.appendChild(imgCosmetic);
                
                let nameCosmetic = document.createElement('td');
                nameCosmetic.innerText = element.name;
                newCosmetic.appendChild(nameCosmetic);

                let descriptionCosmetic = document.createElement('td');
                descriptionCosmetic.innerText = element.description;
                newCosmetic.appendChild(descriptionCosmetic);

                let idCosmetic = document.createElement('td');
                idCosmetic.innerText = element.id;
                newCosmetic.appendChild(idCosmetic);
                bodyGliders.appendChild(newCosmetic);
            };
        });
    });