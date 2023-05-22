import createPost from "./creatPost";
import loggedInUser from "../loggedInUser";

const mainContainer = document.getElementById('main-Container');
const createPostFormBtn = document.createElement('button');
const postMaker = document.createElement('div');
const createuserPost = document.createElement('input');
const createUserContent = document.createElement('input');

if (localStorage.getItem("user")) {
    console.log("Någon är inloggad");
    
    createPost();
    logoutBtnFunction();
} else {
    console.log("Ingen är inloggad");
};

export default async function postForm () {

    const titelInput = document.createElement('input');
    const contentInput = document.createElement('input');
    const upLoadPost = document.createElement('button');
    upLoadPost.id = "upLoad-Post";

    mainContainer.innerHTML = "";

    titelInput.placeholder = "Lägg till titel";
    contentInput.placeholder = "Lägg till inehåll";
    upLoadPost.innerText = "Lägg upp";

    postMaker.append(upLoadPost, titelInput, contentInput);

    mainContainer.appendChild(postMaker);

    upLoadPost.addEventListener('click', async () => {

        let response = await fetch('http://localhost:3000/api/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: loginEmailInput.value, password: loginPasswordInput.value })
    })

    let data = await response.json();
    console.log(data);
    if (data[0]._id) {
            console.log("User inloggad", data);
            localStorage.setItem("user", data[0]._id)
            loggedInUser();
        } else {
            console.log("message", data.message);
        }
        mainContainer.innerHTML = "";
        loginBox.innerHTML = "";
    })


    createPostFormBtn.addEventListener('click', () => {

        postMaker.innerHTML = "";
      
        const createUserPost = document.createElement('h1');
        createUserPost.innerText = "Skapa inlägg!";

        createUserTitel.id = "titel-input";
        createUserTitel.type = "string"
        createUserTitel.placeholder = "Titel";

        createUserContent.id = "content-Input";
        createUserContent.type = "string";
        createUserContent.placeholder = "Innehåll";

        
        const createPostformBtn = document.createElement('button');
        createPostformBtn.innerText = "Skapa inlägg";
      
        postMaker.append(createUserPost, createUserTitel, createUserContent, createPostformBtn );
      
        mainContainer.appendChild(postMaker);
        
      


        createPostformBtn.addEventListener('click', () => {
            
            if (!createUserPost.value || !createUserTitel.value || !createUserContent.value) {

                postMaker.innerHTML = "";
                
                const accountCreatedText = document.createElement('h1');
                accountCreatedText.innerText = "Ditt inlägg har ej skapats!";
                postMaker.appendChild(accountCreatedText);
                postForm();

            } else {

                createPost(createUserPost.value, createUserTitel.value, createUserContent.value);
                
                postMaker.innerHTML = "";
                
                const accountCreatedText = document.createElement('h1');
                accountCreatedText.innerText = "Ditt konto har skapats!";
                postMaker.appendChild(accountCreatedText);
                
                postForm();
            }
            
            
        })
      })
    }