'use strict'
import printGetMyPostsBtn from './printGetMyPostsBtn.js';
import printCreatPostBtn from './post/printCreatPostBtn.js'
import printUsers from './printUsers.js';
import logoutBtnFunction from './logoutBtnFunction.js';

export default async function loggedInUser() {
    
    printGetMyPostsBtn();
    printCreatPostBtn();
    printUsers();
    logoutBtnFunction();
    
}