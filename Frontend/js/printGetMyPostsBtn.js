'use strict';
import getMyPosts from './getMyPosts.js'

export default function printGetMyPostsBtn(){
    const mainHeaderContainer = document.getElementById('main-Header-Container');
    const siteBtns = document.getElementById('site-Btns');

    const myPostsBtn = document.createElement('button');
    myPostsBtn.id = 'my-Posts-Btn';
    myPostsBtn.innerHTML = 'Mina inlägg';
    siteBtns.appendChild(myPostsBtn);

    myPostsBtn.addEventListener('click', () => {
        getMyPosts();
    })
}