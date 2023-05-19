'use strict';

import createAccount from './createAccount.js';
import loggedInUser from './loggedInUser.js';
import logoutBtnFunction from './logoutBtnFunction.js';

const mainContainer = document.getElementById('main-Container');
const createAccountFormBtn = document.createElement('button');
const loginBox = document.createElement('div');
const createAccountUsername = document.createElement('input');
const createEmailInput = document.createElement('input');
const createPasswordInput = document.createElement('input');

if (localStorage.getItem("user")) {
    console.log("Någon är inloggad");
    logoutBtnFunction()
} else {
    console.log("Ingen är inloggad");
};

export default async function loginForm () {

    const loginEmailInput = document.createElement('input');
    const loginPasswordInput = document.createElement('input');
    const loginBtn = document.createElement('button');
    loginBox.id = "login-Box";

    mainContainer.innerHTML = "";

    loginEmailInput.placeholder = "Email Adress";
    loginPasswordInput.placeholder = "Lösenord";
    loginPasswordInput.type = "password";
    loginBtn.innerText = "Logga in";
    createAccountFormBtn.innerText = "Skapa konto";

    loginBox.append(createAccountFormBtn, loginBtn, loginEmailInput, loginPasswordInput);

    mainContainer.appendChild(loginBox);

    loginBtn.addEventListener('click', () => {

        fetch("http://localhost:3000/user/login"), {

        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: loginPasswordInput.value, password: loginPasswordInput.value})

        .then(res => res.mongoos())
        .then(data => {
            console.log("User inloggad", data);
    
            if (data.id) {
                localStorage.setItem("user", data.id)
                printLogoutButton();
                printTodos();
            } else {
                console.log("message", data.message);
            }
        })

        }
        

        mainContainer.innerHTML = "";
        loginBox.innerHTML = "";
        loggedInUser();
    })


    createAccountFormBtn.addEventListener('click', () => {

        loginBox.innerHTML = "";
      
        const createAccountText = document.createElement('h1');
        createAccountText.innerText = "Skapa konto!";

        createAccountUsername.id = "username-Input";
        createAccountUsername.placeholder = "Användarnamn";

        createEmailInput.id = "email-Input";
        createEmailInput.type = "email";
        createEmailInput.placeholder = "Email Adress";

        createPasswordInput.id = "password-Input";
        createPasswordInput.placeholder = "Lösenord";
        
        const createAccountBtn = document.createElement('button');
        createAccountBtn.innerText = "Skapa konto";
      
        loginBox.append(createAccountText, createAccountUsername, createEmailInput, createPasswordInput, createAccountBtn);
      
        mainContainer.appendChild(loginBox);
        
      


        createAccountBtn.addEventListener('click', () => {
            
            if (!createAccountUsername.value || !createEmailInput.value || !createPasswordInput.value) {

                loginBox.innerHTML = "";
                
                const accountCreatedText = document.createElement('h1');
                accountCreatedText.innerText = "Ditt konto har ej skapats!";
                loginBox.appendChild(accountCreatedText);
                loginForm();

            } else {

                createAccount(createAccountUsername.value, createEmailInput.value, createPasswordInput.value);
                
                loginBox.innerHTML = "";
                
                const accountCreatedText = document.createElement('h1');
                accountCreatedText.innerText = "Ditt konto har skapats!";
                loginBox.appendChild(accountCreatedText);
                
                loginForm();
            }
            
            
        })
      })

}






