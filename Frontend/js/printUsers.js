'use strict';

const mainContainer = document.querySelector('#main-Container');
const container = document.createElement('section');
const titleHeader = document.createElement('header');

// mainContainer.append(titleHeader);
container.id = 'content-div';
mainContainer.append(container);

export default async function printUsers() {
    container.innerHTML = "";
    titleHeader.innerHTML = "";
    let response = await fetch('http://localhost:3000/api/users')
    let users = await response.json();
    let ourUsersText = document.createElement('h2');
    ourUsersText.innerHTML = 'VÅRA BLOGGARE';
    let postsText = document.createElement('h2');
    postsText.innerHTML = 'ALLA INLÄGG';
    let separator = document.createElement('h2');
    separator.innerText = '/';

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
    })
    
    titleHeader.append(ourUsersText, separator, postsText);
    mainContainer.append(titleHeader);
    mainContainer.append(container);
}
