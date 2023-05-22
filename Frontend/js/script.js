'use strict';

import getUsername from './getUsername.js';
import headerBtn from './headerBtn.js';
import printUsers from './printUsers.js';
if(!localStorage.getItem('user')){
    headerBtn();
    printUsers();
}else{
    getUsername();
}