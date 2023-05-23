var express = require('express');
var router = express.Router();
const crypto = require('crypto-js');
const UserModel = require('../models/userModel');

//SKAPA NY USER
router.post('/add', async function (req, res) {
    const timestamp = Date.now();
    const formattedDate = new Date(timestamp).toLocaleString();
    let hashedPassword = crypto.SHA3(req.body.password).toString();

    let userToSave = { 
        email: req.body.email, 
        username: req.body.username,
        created: formattedDate
    }
    userToSave.password = hashedPassword;
    const newUser = await UserModel.create(userToSave);
    res.status(201).json(newUser);
})


//HÄMTA ALLA USERS
router.get("/", (req, res) => {

    UserModel.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            console.error(error);
            // Hantera fel
        });
})



//HÄMTA SPECIFIK USER
router.post("/", (req, res) => {
    let findUser = { _id: req.body._id};
    UserModel.find(findUser)
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            console.error(error);
            // Hantera fel
        });
})



//LOGGA IN USER
router.post('/login',(req, res) => {
    const findUser = { email: req.body.email, password: crypto.SHA3(req.body.password).toString() };
    UserModel.find(findUser)
    .then(result => {
        if (result.length === 0) {
            res.status(401).json({ message: "fel inlogg" });
        } else {
            res.json(result);
        }
    })
})







module.exports = router;
