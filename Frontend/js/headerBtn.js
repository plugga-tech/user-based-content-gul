'use strict';

import loginForm from './loginForm.js';
const mainHeaderContainer = document.getElementById('main-Header-Container');

export default async function headerBtn() {
    const headerLoginBtn = document.createElement('button');

    headerLoginBtn.id = 'login-Btn';
    headerLoginBtn.innerText = "Logga in";
    
    mainHeaderContainer.appendChild(headerLoginBtn);
    
    headerLoginBtn.addEventListener('click', () => {
      headerLoginBtn.style.display = 'none';
      loginForm();
    })

};