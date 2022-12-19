const express = require('express');
const database = require('../config/database');
const router = express.Router();
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
var param = req.body;
password = param.password;
var hash = await  bcrypt.hash(password, 5);
var query = "insert into users(username,email,password) values(?,?,?)";
database.query(query,[param.username,param.email,hash],(err,result)=>{
    if (!err) {
        return res.status(200).json({status:"true",response:"Succesfully Registered!"});
    }else{
        return res.status(201).json({status:"false",response:err});
    }
})

});

router.get('/login', (req, res) => {
var param = req.body;
var query = "select * from users where email = ?";

database.query(query,[param.email], async (err,rows)=>{
if (!err) {
    if (rows.length == 0)  {
        res.status(404).send({message:"can't find your account"})
    }else{
        
       await bcrypt.compare(param.password, rows[0].password, function(err, result) {
            if (err || !result) {
                res.status(401).send({message:"can't identify your account"})
              }else{
                res.status(201).send({rows:rows})
                return;
              }
            
          
          });
    

    }
}
})
});
module.exports = router;