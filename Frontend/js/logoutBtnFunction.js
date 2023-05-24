'use strict'

import headerBtn from './headerBtn.js';

export default async function logoutBtnFunction() {
    const mainHeaderContainer = document.getElementById('main-Header-Container');
    const siteBtns = document.getElementById('site-Btns');

    const createPostBtn = document.getElementById('create-Post-Btn');
    const getMyPostsBtn = document.getElementById('my-Posts-Btn');
    const name = document.getElementById('name');
    const logoutBtn = document.createElement('button');
    logoutBtn.id = "header-Logout-Btn";
    logoutBtn.innerText = "Logga ut";
    siteBtns.appendChild(logoutBtn);
    
    logoutBtn.addEventListener('click', () => {
        if(name){
            name.style.display = 'none';
        }
        localStorage.removeItem("user");
        logoutBtn.style.display = "none";
        createPostBtn.style.display = 'none';
        getMyPostsBtn.style.display = 'none';
        headerBtn();
    });
};