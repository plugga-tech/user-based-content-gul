'use strict';

const mainContainer = document.querySelector('#main-Container');
const container = document.createElement('div');
const titleHeader = document.createElement('div');
container.append(titleHeader);
container.id = 'content-div';
mainContainer.append(container);

export default async function printUsers(){
    let response = await fetch('http://localhost:3000/api/users')
    let users = await response.json();
    console.log(users);
    let ourUsersText = document.createElement('h2');
    ourUsersText.innerHTML = 'VÅRA BLOGGARE';
    users.map(user => {
        const card = document.createElement('div');
        card.id = 'user-cards';
        const nameTag = document.createElement('h3');
        const img = document.createElement('img');
        img.src = 'js/bild.jpg';
        img.id = 'user-img';
        nameTag.innerHTML = user.username;
        card.append(nameTag, img);
        container.append(card);
        titleHeader.append(ourUsersText);
    })
}
