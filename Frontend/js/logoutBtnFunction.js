'use strict'

import headerBtn from './headerBtn.js';

export default async function logoutBtnFunction() {
    const mainHeaderContainer = document.getElementById('main-Header-Container');
    const createPostBtn = document.getElementById('create-Post-Btn');
    const name = document.getElementById('name');
    const logoutBtn = document.createElement('button');
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    mainHeaderContainer.appendChild(logoutBtn);
    
    logoutBtn.addEventListener('click', () => {
        if(name){
            name.style.display = 'none';
        }
        localStorage.removeItem("user");
        logoutBtn.style.display = "none";
        createPostBtn.style.display = 'none';
        headerBtn();
    });
};