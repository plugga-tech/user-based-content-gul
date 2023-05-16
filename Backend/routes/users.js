var express = require('express');
var router = express.Router();
const crypto = require('crypto-js');
const UserModel = require('../models/userModel');

//SKAPA NY USER
router.post('/add', async function (req, res) {
    let userToSave = { email: req.body.email, username: req.body.username }
    let hashedPassword = crypto.SHA3(req.body.password).toString();
    userToSave.password = hashedPassword;

    const newUser = await UserModel.create(userToSave);
    res.status(201).json(newUser);

})


//HÄMTA ALLA USERS
router.get("/", (req, res) => {

    UserModel.find()
        .then(users => {
            console.log(users);
            res.json(users)
        })
        .catch(error => {
            console.error(error);
            // Hantera fel
        });
})



//HÄMTA SPECIFIK USER 



//LOGGA IN USER
router.post('/login',(req, res) => {
    const findUser = { email: req.body.email, password: crypto.SHA3(req.body.password).toString() };
    UserModel.find(findUser)
    .then(result => {
        if (result.length === 0) {
            res.status(401).json({ message: "fel inlogg" });
        } else {
            console.log(result);
            res.json(result);
        }
    })
})







module.exports = router;
