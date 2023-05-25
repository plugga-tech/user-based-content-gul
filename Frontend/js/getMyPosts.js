'use strict';

import deletePost from './deletePost.js';
import editPost from './editPost.js';

export default function getMyPosts() {
    const mainContainer = document.getElementById('main-Container');
    mainContainer.innerHTML = '';
    const container = document.createElement('div');
    container.id = 'content-div';
    const myPostsText = document.createElement('h2');
    myPostsText.innerHTML = 'MINA INLÄGG';
    const titleHeader = document.createElement('header');
    mainContainer.append(titleHeader);
    titleHeader.append(myPostsText);
    mainContainer.appendChild(container);
    const authorId = localStorage.getItem('user');
    fetch(`http://localhost:3000/api/posts/${authorId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({authorId})
    })
        .then(response => response.json())
        .then(posts => {
            if(posts.length === 0){
                container.innerText = '';
                const noPostsEl = document.createElement('p');
                noPostsEl.textContent = 'Du har inga inlägg än';
                container.appendChild(noPostsEl);
                mainContainer.append(container);
            }else{
                posts.reverse();
                posts.forEach(post => {
                    const postElWrapper = document.createElement('div');
                    postElWrapper.id = "postEl-Wrapper";
                    const postEl = document.createElement('div');
                    postEl.id = 'postEl';
                    const titleEl = document.createElement('h2');
                    const contentEl = document.createElement('p');
                    const firstTwoSentences = post.content.split('.').slice(0, 2).join('.') + '.';
                    const authorDateEl = document.createElement('p');
                    authorDateEl.textContent = `Skapad: ${post.created}`;
                    titleEl.textContent = post.title;
                    contentEl.textContent = firstTwoSentences;
                    const deleteBtn = document.createElement('button');
                    const editBtn = document.createElement('button');
                    const buttonDiv = document.createElement('div');
                    deleteBtn.innerText = 'Ta bort';
                    editBtn.innerText = 'Redigera';
                    deleteBtn.id = 'delete-Btn';
                    editBtn.id = 'edit-Btn';
                    buttonDiv.id= 'button-Div';
                    buttonDiv.append(editBtn, deleteBtn);
                    postEl.append(titleEl, contentEl, authorDateEl);
                    postElWrapper.append(postEl, buttonDiv);
                    container.append(postElWrapper);


                    deleteBtn.addEventListener('click', () => {
                        deletePost(post._id);
                    });

                    editBtn.addEventListener('click', () => {
                        editPost(post._id);
                    });
                    
                });
            }
        });
        
};
