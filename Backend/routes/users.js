var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const crypto = require('crypto-js');
const UserModel = require('../models/userModel');

//SKAPA NY USER
router.post('/add', async function (req, res){
    let userToSave = {email: req.body.email, username: req.body.username}
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







module.exports = router;
