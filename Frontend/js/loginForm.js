'use strict';

import createAccount from './createAccount.js';
import loggedInUser from './loggedInUser.js';
import doesUserExist from './doesUserExist.js';

const mainContainer = document.getElementById('main-Container');
const createAccountFormBtn = document.createElement('button');
const loginBox = document.createElement('div');
const createAccountUsername = document.createElement('input');
const createEmailInput = document.createElement('input');
const createPasswordInput = document.createElement('input');
const message = document.createElement('h3');

export default async function loginForm () {

    const loginEmailInput = document.createElement('input');
    const loginPasswordInput = document.createElement('input');
    const loginBtn = document.createElement('button');
    const loginBoxDiv = document.createElement('div');
    const loginText = document.createElement('h1');

    loginBox.innerHTML = "";

    loginBoxDiv.id = "loginBox-Wrapper";

    loginBox.id = "login-Box";

    loginText.id = "login-Text";

    mainContainer.innerHTML = "";

    loginEmailInput.placeholder = "Email Adress";
    loginEmailInput.id = "login-Email-Input";

    loginPasswordInput.placeholder = "Lösenord";
    loginPasswordInput.id = "login-Password-Input";
    loginPasswordInput.type = "password";

    loginBtn.innerText = "Logga in";
    loginBtn.id = "login-Btn";

    createAccountFormBtn.innerText = "Skapa konto";
    createAccountFormBtn.id = "create-Account-Form-Btn";

    loginText.innerText = "Logga in";

    loginBox.append(loginText, loginEmailInput, loginPasswordInput, loginBtn, createAccountFormBtn);
    loginBoxDiv.appendChild(loginBox)

    mainContainer.appendChild(loginBoxDiv);

    loginBtn.addEventListener('click', async () => {
        message.innerText = "";
        if(!loginEmailInput.value || !loginPasswordInput.value){
            alert('Fyll i både email och lösenord');
        }else{

            let response = await fetch('http://localhost:3000/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: loginEmailInput.value, password: loginPasswordInput.value })
            })
            let data = await response.json();
            if (!data[0] || !data[0]._id) {
                message.id = "message";
                message.innerText = "";
                message.innerText = `${data.message}, försök igen!`;
                loginEmailInput.value = "";
                loginPasswordInput.value = "";
                loginBox.append(message);
            } else {
                localStorage.setItem("user", data[0]._id)
                const mainHeaderContainer = document.getElementById('main-Header-Container');
                const siteBtns = document.getElementById('site-Btns');

                const name = document.createElement('h3');
                name.id = 'name';
                name.innerHTML = `Inloggad som ${data[0].username}`;
                siteBtns.appendChild(name);
                loggedInUser();
                mainContainer.innerHTML = "";
                loginBox.innerHTML = "";
            };
        };
    });


    createAccountFormBtn.addEventListener('click', () => {

        mainContainer.innerHTML = "";
        loginBox.innerHTML = "";

        const createAccountText = document.createElement('h1');
        createAccountText.innerText = "Skapa konto!";
        createAccountText.id = "create-Account-Text";

        createAccountUsername.id = "username-Input";
        createAccountUsername.placeholder = "Användarnamn";

        createEmailInput.id = "email-Input";
        createEmailInput.type = "email";
        createEmailInput.placeholder = "Email Adress";

        createPasswordInput.id = "password-Input";
        createPasswordInput.placeholder = "Lösenord";
        createPasswordInput.type = "password";

        const createAccountBtn = document.createElement('button');
        createAccountBtn.id = "create-Account-Btn";
        createAccountBtn.innerText = "Skapa konto";

        const goBackBtn = document.createElement('button');
        goBackBtn.id = 'go-Back-Btn'
        goBackBtn.innerText = "Tillbaks";
        goBackBtn.addEventListener('click', () => {
            loginForm();
        })

        loginBox.append(createAccountText, createAccountUsername, createEmailInput, createPasswordInput, createAccountBtn, goBackBtn);
        loginBoxDiv.appendChild(loginBox);

        mainContainer.appendChild(loginBoxDiv);




        createAccountBtn.addEventListener('click', async() => {

            if (!createAccountUsername.value || !createEmailInput.value || !createPasswordInput.value) {

                loginBox.innerHTML = "";

                const accountCreatedText = document.createElement('h1');
                accountCreatedText.innerText = "Ditt konto har ej skapats!";
                accountCreatedText.id = "account-Not-Created";
                loginForm();
                loginBox.appendChild(accountCreatedText);

            } else {

                const userExist = await doesUserExist()
                if (userExist === true) {
                    message.innerText = "Användarnamnet och/eller emailen finns redan!";

                    loginBox.appendChild(message);

                }else{
                    createAccount(createAccountUsername.value, createEmailInput.value, createPasswordInput.value);
                loginBox.innerHTML = "";

                const accountCreatedText = document.createElement('h1');
                accountCreatedText.innerText = "Ditt konto har skapats!";
                loginBox.appendChild(accountCreatedText);

                loginForm();
                }

            }


        })
    })

}






