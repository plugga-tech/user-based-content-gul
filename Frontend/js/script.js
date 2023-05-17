fetch('http://localhost:3000/api/posts')
  .then(response => response.json())
  .then(posts => {
    // Get the container element to display the posts
    const container = document.getElementById('posts');

    // Display all posts with title 
    posts.forEach(post => {
      const postElement = document.createElement('div');
      const titleElement = document.createElement('h2');
      const contentElement = document.createElement('p');
      const firstTwoSentences = post.content.split('.').slice(0, 2).join('.') + '.';
      const authorDateEl = document.createElement('p');
      
      authorDateEl.textContent = `Author: ${post.author}, Date: ${post.created}`;
      titleElement.textContent = post.title;
      contentElement.textContent = firstTwoSentences;
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(authorDateEl);
      container.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });