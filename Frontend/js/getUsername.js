import loggedInUser from './loggedInUser.js';


export default async function getUsername() {
    let response = await fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: localStorage.getItem('user') })
        })
    let data = await response.json()
    const mainHeaderContainer = document.getElementById('main-Header-Container');
    const siteBtns = document.getElementById('site-Btns');
    
    const name = document.createElement('h3');
    name.id = 'name';
    name.innerHTML = `Inloggad som ${data[0].username}`;
    siteBtns.appendChild(name);
    loggedInUser();
}