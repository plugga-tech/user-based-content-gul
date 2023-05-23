'use strict';

import printPosts from './post/show-posts.js'

const mainContainer = document.querySelector('#main-Container');
const container = document.createElement('section');
const titleHeader = document.createElement('header');

// mainContainer.append(titleHeader);
container.id = 'content-div';
mainContainer.append(container);

export default async function printUsers() {
    mainContainer.innerHTML = "";
    container.innerHTML = "";
    titleHeader.innerHTML = "";
    let response = await fetch('http://localhost:3000/api/users')
    let users = await response.json();
    let ourUsersText = document.createElement('h2');
    ourUsersText.innerHTML = 'VÅRA BLOGGARE';
    let postsText = document.createElement('h2');
    postsText.innerHTML = 'ALLA INLÄGG';
    let separator = document.createElement('h2');
    separator.innerText = '/';
    printPosts();
    
    


    ourUsersText.addEventListener('click', () => {
        container.innerHTML = '';
        postsText.style.textDecoration = 'none';
        ourUsersText.style.textDecoration = 'underline';
        printUsersCard();
    })    
    ourUsersText.addEventListener('mouseover', () =>{
        ourUsersText.style.cursor = 'pointer';
    })
    ourUsersText.addEventListener('mouseout', () => {
        ourUsersText.style.cursor = 'default';
    });

    postsText.addEventListener('click', () => {
            container.innerHTML = '';
            ourUsersText.style.textDecoration = 'none';
            postsText.style.textDecoration = 'underline';
            printPosts();
    })
    postsText.addEventListener('mouseover', () =>{
        postsText.style.cursor = 'pointer';
    })
    postsText.addEventListener('mouseout', () => {
        postsText.style.cursor = 'default';
    });
        function printUsersCard() {
            users.map(user => {
              const card = document.createElement('div');
              card.id = 'user-cards';
              card.setAttribute('data-user-id', user._id);
              const nameTag = document.createElement('h3');
              const img = document.createElement('img');
              img.src = 'js/bild.jpg';
              img.id = 'user-img';
              nameTag.innerHTML = user.username;
              card.append(nameTag, img);
              container.append(card);
              card.addEventListener('mouseover', () => {
                card.style.cursor = 'pointer';
              });
              
              card.addEventListener('mouseout', () => {
                card.style.cursor = 'default';
              });
            });
          }

          function displayUserPosts(userId) {
            fetch('http://localhost:3000/api/posts')
              .then(response => response.json())
              .then(posts => {
                container.innerHTML = ''; // Clear the container

                // Filter posts by matching author ID
                const userPosts = posts.filter(post => post.author._id === userId);

                // Display filtered posts with title
                userPosts.forEach(post => {
                  // Create post elements
                  const postEl = document.createElement('div');
                  postEl.id = 'postEl';
                  const titleEl = document.createElement('h2');
                  const contentEl = document.createElement('p');
                  const firstTwoSentences = post.content.split('.').slice(0, 2).join('.') + '.';
                  const authorDateEl = document.createElement('p');
                  authorDateEl.textContent = `Author: ${post.author.username}, Date: ${post.created}`;
                  titleEl.textContent = post.title;
                  contentEl.textContent = firstTwoSentences;
                  postEl.append(titleEl, contentEl, authorDateEl);
                  container.appendChild(postEl);


                  postEl.addEventListener('mouseover', () => {
                    postEl.style.cursor = 'pointer';
                  });
                  
                  postEl.addEventListener('mouseout', () => {
                    postEl.style.cursor = 'default';
                  });

                  // Add click event listener to each title element
                  postEl.addEventListener('click', () => {
                    // Hide all posts
                    //container.style.display = 'none';

                    // Clear the container
                    container.innerHTML = '';

                    // Create elements for the selected post
                    const selectedTitleEl = document.createElement('h2');
                    const selectedContentEl = document.createElement('p');
                    const selectedAuthorDateEl = document.createElement('p');
                    const backButton = document.createElement('button');

                    selectedTitleEl.textContent = post.title;
                    selectedContentEl.textContent = post.content;
                    selectedAuthorDateEl.textContent = `Author: ${post.author.username}, Date: ${post.created}`;
                    container.append(selectedTitleEl, selectedContentEl, selectedAuthorDateEl, backButton);

                    // Style the back button
                    backButton.textContent = '< Back';
                    backButton.id = 'backBtn';
                    backButton.style.marginTop = '1rem';

                    // Add click event listener to back button
                    backButton.addEventListener('click', () => {
                        // Clear the container
                        container.innerHTML = '';
                        // Show all posts
                        displayUserPosts(userId);
                    });
                  });
                });
                if (userPosts.length === 0) {
                  const noPostsEl = document.createElement('p');
                  noPostsEl.textContent = 'No posts found for this user.';
                  container.appendChild(noPostsEl);
                  mainContainer.append(container);
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
          }

          container.addEventListener('click', event => {
            const userCard = event.target.closest('#user-cards');
            if (userCard) {
              const userId = userCard.getAttribute('data-user-id');
              displayUserPosts(userId); // Display posts by user ID
            }
          });


    titleHeader.append(ourUsersText, separator, postsText);
    mainContainer.append(titleHeader);
    mainContainer.append(container);
}
