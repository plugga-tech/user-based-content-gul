'use strict';

import loginForm from './loginForm.js';


const mainHeader = document.getElementById('main-Head');
const mainHeaderContainer = document.getElementById('main-Header-Container');


export default async function headerBtn() {
    const headerLoginBtn = document.createElement('button');

    headerLoginBtn.id = 'login-Btn';
    headerLoginBtn.innerText = "Logga in";
    
    mainHeaderContainer.appendChild(headerLoginBtn);
    /* mainHeader.appendChild(mainHeaderContainer); */

    headerLoginBtn.addEventListener('click', () => {

      headerLoginBtn.style.display = 'none';
      // const loginBox = document.createElement('div');
      
      loginForm();

      console.log("Du är inloggad");
    })

};