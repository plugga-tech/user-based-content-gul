'use strict';

import loginForm from './loginForm.js';
const mainHeaderContainer = document.getElementById('main-Header-Container');
const siteBtns = document.getElementById('site-Btns');

export default async function headerBtn() {
    siteBtns.innerHTML = "";
    const headerLoginBtn = document.createElement('button');

    headerLoginBtn.id = 'header-Login-Btn';
    headerLoginBtn.innerText = "Logga in";
    
    siteBtns.appendChild(headerLoginBtn);
    
    headerLoginBtn.addEventListener('click', () => {
      headerLoginBtn.style.display = 'none';
      loginForm();
    })

};