'use strict'
import printPostForm from "./printPostForm.js"

export default function printCreatPostBtn() {
    const mainContainer = document.getElementById('main-Container')
    const headerContainer = document.getElementById('main-Header-Container')
    const createPostBtn = document.createElement('button')
    createPostBtn.id = 'create-Post-Btn';
    createPostBtn.innerHTML = 'Skapa inlägg';
    headerContainer.append(createPostBtn);

    createPostBtn.addEventListener("click", () => {
        mainContainer.innerHTML = '';
        printPostForm();

    })
}