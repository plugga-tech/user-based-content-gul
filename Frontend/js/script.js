'use strict';

import printPosts from './post/show-posts.js';
import headerBtn from './headerBtn.js';
import printUsers from './printUsers.js';
if(!localStorage.getItem('user')){
    headerBtn();
}
printUsers();
// printPosts();