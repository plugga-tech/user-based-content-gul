var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const crypto = require('crypto-js');
require('dotenv').config();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    access: {type: String, required: true}
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

async function dbConnect() {
    await mongoose.connect(process.env.DB_URL)
    .then(() =>{
        console.log("Ansluten till databasen");
    })
}

dbConnect();

console.log('hej');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
