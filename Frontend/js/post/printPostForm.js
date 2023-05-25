'use strict'
import getMyPosts from '../getMyPosts.js';
import creatPost from './creatPost.js';

export default function printPostForm() {
    const mainContainer = document.getElementById('main-Container');
    const createPostWrapper = document.createElement('div');
    createPostWrapper.id = "create-Post-Wrapper"

    const titelInput = document.createElement('input');
    titelInput.id = "titel-Input";
    titelInput.placeholder = 'Titel här';

    const contentInput = document.createElement('textarea');
    contentInput.placeholder = 'Innehåll här';
    contentInput.id = "content-Input";

    const creatBtn = document.createElement('button');
    creatBtn.innerText = 'Publicera inlägg'
    creatBtn.id = "creat-Btn";

    createPostWrapper.append(titelInput, contentInput, creatBtn);
    mainContainer.append(createPostWrapper);
    const author = localStorage.getItem('user');

    creatBtn.addEventListener('click', () => {
        mainContainer.innerHTML = '';
        if(titelInput.value === "" || contentInput.value === ""){
            alert('Fyll i titel och innehåll');
            printPostForm();
        }else{
            creatPost(titelInput.value, contentInput.value, author);
            console.log(author);
            getMyPosts();
        }
    })

}