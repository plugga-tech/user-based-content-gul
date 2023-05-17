'use strict';

import loginForm from './loginForm.js';

const mainContainer = document.getElementById('main-Container');
const mainHeader = document.getElementById('main-Head');
const createAccountBtn = document.createElement('button');
const loginBox = document.createElement('div');

export default async function headerBtn() {
    const headerLoginBtn = document.createElement('button');

    headerLoginBtn.id = 'login-Btn';
    headerLoginBtn.innerText = "Logga in";
    
    mainHeader.appendChild(headerLoginBtn);

    headerLoginBtn.addEventListener('click', () => {

      headerLoginBtn.style.display = 'none';
      // const loginBox = document.createElement('div');
      
      loginForm();

      console.log("Du är inloggad");
    })

};