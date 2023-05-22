'use strict'
import printPostForm from "./printPostForm.js"

export default function printCreatPostBtn() {
    const mainContainer = document.getElementById('main-Container')
    const headerContainer = document.getElementById('main-Header-Container')
    const knapp = document.createElement('button')
    knapp.innerHTML ='Skapa inlägg';
    headerContainer.append(knapp);

    knapp.addEventListener("click", ()=> {
        mainContainer.innerHTML = '';
        printPostForm();

    })
}