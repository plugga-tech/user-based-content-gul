'use strict';

import getMyPosts from "./getMyPosts.js";

export default async function editPost(postId) {
    const mainContainer = document.getElementById('main-Container');
    mainContainer.innerHTML = '';
    const editForm = document.createElement('form');
    editForm.id = 'editForm';
    const editTitleInput = document.createElement('input');
    editTitleInput.type = 'text';
    editTitleInput.id = 'editTitleInput';
    editTitleInput.placeholder = 'Titel';
    editTitleInput.required = true;
    const editContentInput = document.createElement('textarea');
    editContentInput.id = 'editContentInput';
    editContentInput.placeholder = 'Innehåll';
    const saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.textContent = 'Spara';

    editForm.append(editTitleInput, editContentInput, saveButton);

    mainContainer.appendChild(editForm);

    const response = await fetch(`http://localhost:3000/api/posts/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id: postId})
    })
    const data = await response.json();
        
    // Fyll i formuläret med befintliga värden
    editTitleInput.value = data[0].title;
    editContentInput.value = data[0].content;

    // Visa formuläret för redigering av inlägg
    editForm.style.display = 'block';

    // Händelsehanterare för när formuläret skickas
    editForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Hämta uppdaterade värden för titel och innehåll från formuläret
        const updatedTitle = editTitleInput.value;
        const updatedContent = editContentInput.value;

        // Skapa ett objekt med de uppdaterade uppgifterna
        const updatedPost = {
            title: updatedTitle,
            content: updatedContent
        };

        try {
            // Skicka en PUT-förfrågan till backend med de uppdaterade uppgifterna
            const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedPost)
            });

            if (response.ok) {
                getMyPosts();
            } else {
                console.error('Det gick inte att uppdatera inlägget.');
            }
        } catch (error) {
            console.error('Ett fel uppstod:', error);
        }
    });
}