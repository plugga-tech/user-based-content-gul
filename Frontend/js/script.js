'use strict';

import printPosts from './post/show-posts.js';
import headerBtn from './headerBtn.js';
import printUsers from './printUsers.js';
import printCreatPostBtn from './post/printCreatPostBtn.js';
if(!localStorage.getItem('user')){

    headerBtn();
}else{
    
    printCreatPostBtn();
}
printUsers();
// printPosts();