fetch('http://localhost:3000/api/posts')
  .then(response => response.json())
  .then(posts => {
    // Get the container element to display the posts
    const container = document.getElementById('posts');

    // Display all posts with title
    posts.forEach(post => {
      const postEl = document.createElement('div');
      const titleEl = document.createElement('h2');
      const contentEl = document.createElement('p');
      const firstTwoSentences = post.content.split('.').slice(0, 2).join('.') + '.';
      const authorDateEl = document.createElement('p');

      authorDateEl.textContent = `Author: ${post.author}, Date: ${post.created}`;
      titleEl.textContent = post.title;
      contentEl.textContent = firstTwoSentences;
      postEl.appendChild(titleEl);
      postEl.appendChild(contentEl);
      postEl.appendChild(authorDateEl);
      container.appendChild(postEl);

      // Add click event listener to each title element
      titleEl.addEventListener('click', () => {
        // Hide all posts
        container.style.display = 'none';

        // Create a container for the selected post
        const selectedPostContainer = document.createElement('div');
        const selectedTitleEl = document.createElement('h2');
        const selectedContentEl = document.createElement('p');
        const selectedAuthorDateEl = document.createElement('p');
        const backButton = document.createElement('button');

        selectedTitleEl.textContent = post.title;
        selectedContentEl.textContent = post.content;
        selectedAuthorDateEl.textContent = `Author: ${post.author}, Date: ${post.created}`;
        selectedPostContainer.appendChild(selectedTitleEl);
        selectedPostContainer.appendChild(selectedContentEl);
        selectedPostContainer.appendChild(selectedAuthorDateEl);
        selectedPostContainer.appendChild(backButton);
        document.body.appendChild(selectedPostContainer);

        // Style the back button
        backButton.textContent = '< Back';
        backButton.id = 'backBtn';
        backButton.style.marginTop = '1rem';

        // Add click event listener to back button
        backButton.addEventListener('click', () => {
          // Show all posts and remove the selected post container
          container.style.display = 'block';
          document.body.removeChild(selectedPostContainer);
        });
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });