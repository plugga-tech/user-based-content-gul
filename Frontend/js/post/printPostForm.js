'use strict'
import creatPost from './creatPost.js';

export default function printPostForm() {
    const mainContainer = document.getElementById('main-Container');
    const titelInput = document.createElement('input');
    titelInput.placeholder = 'Titel här';
    const contentInput = document.createElement('textarea');
    contentInput.placeholder = 'Innehåll här';
    const creatBtn = document.createElement('button');
    creatBtn.innerText = 'Publicera inlägg'
    
    mainContainer.append(titelInput, contentInput, creatBtn);
    const author = localStorage.getItem('user');

    creatBtn.addEventListener('click', () => {
        mainContainer.innerHTML = '';
        creatPost(titelInput.value, contentInput.value, author);
        console.log(author);
    })

}