'use strict'
import printCreatPostBtn from './post/printCreatPostBtn.js'
import printUsers from './printUsers.js';
import logoutBtnFunction from './logoutBtnFunction.js';


const mainContainer = document.getElementById('main-Container');

export default async function loggedInUser() {
    console.log("Hit?");

    // mainContainer.innerHTML = "";
    printCreatPostBtn();
    printUsers();
    logoutBtnFunction();
    
}