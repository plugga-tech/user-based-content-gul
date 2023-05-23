'use strict';

export default async function doesUserExist() {

    let usernameInput = document.getElementById('username-Input');
    let emailInput = document.getElementById('email-Input');
    usernameInput = usernameInput.value;
    emailInput = emailInput.value;


    let response = await fetch('http://localhost:3000/api/users')
    let users = await response.json();

    const foundUser = users.find(user => user.username == usernameInput)
    const foundEmail = users.find(user => user.email == emailInput)
    if (foundUser === undefined && foundEmail === undefined) {
        return false;
    } else {
        return true;
    }
}