'use strict';

const mainContainer = document.getElementById('main-Container');

export default async function headerBtn() {
    console.log("hej");
    const loginBtn = document.createElement('button');

    loginBtn.innerText = "Logga in";

    loginBtn.addEventListener('click', () => {
      loginBtn.style.display = 'none';

      console.log("Du är inloggad");
    })

    mainContainer.appendChild(loginBtn);


  // När man har loggat in ska knappen försvinna och bytas mot andra saker som t.ex "Hej ditt namn"
};