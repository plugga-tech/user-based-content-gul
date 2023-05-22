'use strict'
import createPost from './post/creatPost.js';
import printUsers from './printUsers.js';
import logoutBtnFunction from './logoutBtnFunction.js';


const mainContainer = document.getElementById('main-Container');

export default async function loggedInUser() {
    console.log("Hit?");

    // mainContainer.innerHTML = "";
    createPost();
    printUsers();
    logoutBtnFunction();
    
}