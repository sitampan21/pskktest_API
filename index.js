const express = require('express');
const database = require('./config/database');
const users = require('./router/user-routes')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user',users)
app.get('/', (req, res) => {
    return res.status(200).json({message:"Api Connected","Author":"Bagus Andre Wijaya"});
});
module.exports = app