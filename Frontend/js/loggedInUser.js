'use strict'
import printCreatPostBtn from './post/printCreatPostBtn.js'
import printUsers from './printUsers.js';
import logoutBtnFunction from './logoutBtnFunction.js';

export default async function loggedInUser() {
    
    printCreatPostBtn();
    printUsers();
    logoutBtnFunction();
    
}