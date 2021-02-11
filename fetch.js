fetch('http://hp-api.herokuapp.com/api/characters')
.then((response)=> {
    response.json().then((characters) => {
        const $ul = document.querySelector('.hp-characters-list');
            
        characters.forEach((character) => {
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
    });
})
.catch((error)=> { 
    alert('Une erreur est survenue !');
    console.log(error);
});