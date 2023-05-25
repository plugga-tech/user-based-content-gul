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
    fetch('http://localhost:3000/api/posts')
        .then(response => response.json())
        .then(posts => {
            const noPostsEl = document.createElement('p');
            noPostsEl.textContent = 'Du har inga inlägg än';
            container.appendChild(noPostsEl);
            mainContainer.append(container);
            container.innerText = '';

            posts.forEach(post => {
                if(post.author._id === localStorage.getItem('user')){
                    const postEl = document.createElement('div');
                    postEl.id = 'postEl';
                    const titleEl = document.createElement('h2');
                    const contentEl = document.createElement('p');
                    const firstTwoSentences = post.content.split('.').slice(0, 2).join('.') + '.';
                    const authorDateEl = document.createElement('p');
                    authorDateEl.textContent = `Author: ${post.author.username}, Date: ${post.created}`;
                    titleEl.textContent = post.title;
                    contentEl.textContent = firstTwoSentences;
                    const deleteBtn = document.createElement('button');
                    const editBtn = document.createElement('button');
                    deleteBtn.innerText = 'Ta bort';
                    editBtn.innerText = 'Redigera';
                    postEl.append(titleEl, contentEl, authorDateEl);
                    container.append(postEl, deleteBtn, editBtn);


                    deleteBtn.addEventListener('click', () => {
                        deletePost(post._id);
                    });

                    editBtn.addEventListener('click', () => {
                        editPost(post._id);
                    });
                };
            });
        });
        
};
