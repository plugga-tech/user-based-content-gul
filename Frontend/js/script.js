'use strict';

import headerBtn from './headerBtn.js';
import printUsers from './printUsers.js';
import loggedInUser from './loggedInUser.js';
if(!localStorage.getItem('user')){
    headerBtn();
    printUsers();
}else{
    loggedInUser();
}