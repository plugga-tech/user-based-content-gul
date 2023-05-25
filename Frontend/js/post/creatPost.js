export default async function createPost(title, content, author ) {
    let response = await fetch('http://localhost:3000/api/posts/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: title, content: content, userId: author })
    })

    let data = await response.json();
    console.log(data);
}