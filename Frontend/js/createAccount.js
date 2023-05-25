import loginForm from "./loginForm.js";

export default async function createAccount(username, email, password) {
    let response = await fetch('http://localhost:3000/api/users/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, email: email, password: password })
    })
}