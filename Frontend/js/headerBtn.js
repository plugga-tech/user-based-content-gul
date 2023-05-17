'use strict';

// import loginForm from './loginForm.js'

const mainHeader = document.getElementById('main-Head')

export default async function headerBtn() {

  const loginContainer = document.createElement('div');
  const loginBtn = document.createElement('button');

  loginBtn.id = 'login-Btn';
  loginBtn.innerText = "Logga in";

  loginBtn.addEventListener('click', () => {
    loginBtn.style.display = 'none';
    console.log("Du är inloggad");
    // loginForm();
    })

  // APPENDAR ALLT
  loginContainer.append(loginBtn)
  mainHeader.appendChild(loginContainer);
  // När man har loggat in ska knappen försvinna och bytas mot andra saker som t.ex "Hej ditt namn"
};