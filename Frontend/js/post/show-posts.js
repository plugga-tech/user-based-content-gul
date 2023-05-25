'use strict';

export default async function printPosts(){
  fetch('http://localhost:3000/api/posts')
    .then(response => response.json())
    .then(posts => {
      // Get the container element to display the posts
      const container = document.getElementById('content-div');
      // Gets the latest post at the top
      posts.reverse();
      // Display all posts with title
      posts.forEach(post => {
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
          container.innerHTML = '';

          // Create a container for the selected post
          const singlePost = document.createElement('div');
          singlePost.id = 'single-post';
          const selectedTitleEl = document.createElement('h2');
          selectedTitleEl.id = 'selected-title';
          const selectedContentEl = document.createElement('p');
          selectedContentEl.id = 'selected-content';
          const selectedAuthorDateEl = document.createElement('p');
          selectedAuthorDateEl.id = 'selected-author'
          const backButton = document.createElement('button');
          backButton.id = 'selected-btn'

          selectedTitleEl.textContent = post.title;
          selectedContentEl.textContent = post.content;
          selectedAuthorDateEl.textContent = `Author: ${post.author.username}, Date: ${post.created}`;
          singlePost.append(selectedTitleEl, selectedContentEl, selectedAuthorDateEl, backButton)
          container.append(singlePost);

          // Style the back button
          backButton.textContent = 'Back';
          backButton.id = 'backBtn';
          backButton.style.marginTop = '1rem';

          // Add click event listener to back button
          backButton.addEventListener('click', () => {
            container.innerHTML = '';
            printPosts();
          });
        });
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}