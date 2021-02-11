const pigeon = new XMLHttpRequest();
pigeon.open('GET', 'http://hp-api.herokuapp.com/api/characters');
pigeon.send();

pigeon.addEventListener('readystatechange', () => {
    if(pigeon.readyState === 4) {
        if(pigeon.status === 200 || pigeon.status === 201) {
            console.log(pigeon.responseText);
            const hpCharacters = JSON.parse(pigeon.responseText);
            console.log(hpCharacters);
            const $ul = document.querySelector('.hp-characters-list');
            
            hpCharacters.forEach((character) => {
                const $li = document.createElement('li');
                $ul.appendChild($li);
                $name = document.createElement('p');
                $name.innerText = `Nom : ${character.name}`;
                $li.appendChild($name);
                $img = document.createElement('img');
                $img.src = character.image;
                $img.alt = character.actor;
                $li.appendChild($img);
            });
        } else {
            alert('une erreur est survenue, statut ' + pigeon.status);
        }

    }
});


pigeon.addEventListener('error', (error) => {
    console.log(error);
    alert('Une erreur inconnue est survenue');
});




