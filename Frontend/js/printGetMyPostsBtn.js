'use strict';
import getMyPosts from './getMyPosts.js'

export default function printGetMyPostsBtn(){
    const mainHeaderContainer = document.getElementById('main-Header-Container');
    const myPostsBtn = document.createElement('button');
    myPostsBtn.id = 'my-posts-btn';
    myPostsBtn.innerHTML = 'Mina inlägg';
    mainHeaderContainer.appendChild(myPostsBtn);

    myPostsBtn.addEventListener('click', () => {
        getMyPosts();
    })
}