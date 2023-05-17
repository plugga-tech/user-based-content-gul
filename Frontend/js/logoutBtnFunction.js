'use strict'

import headerBtn from './headerBtn.js';

const mainHeaderContainer = document.getElementById('main-Header-Container');

export default async function logoutBtnFunction() {

    const logoutBtn = document.createElement('button');
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerText = "Logga ut";
    mainHeaderContainer.appendChild(logoutBtn);

    logoutBtn.addEventListener('click', () => {
        console.log("Logga ut Hit?");

        logoutBtn.style.display = "none";
        headerBtn();

    })

}