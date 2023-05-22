'use strict'
import printCreatPostBtn from './post/printCreatPostBtn.js'
import printUsers from './printUsers.js';
import logoutBtnFunction from './logoutBtnFunction.js';

export default async function loggedInUser() {
    console.log("Hit?");
    const mainHeaderContainer = document.getElementById('main-Header-Container');
    const name = document.createElement('h5');
    name.id = 'name';
    name.innerHTML = localStorage.getItem('user');
    mainHeaderContainer.appendChild(name);
    printCreatPostBtn();
    printUsers();
    logoutBtnFunction();
    
}