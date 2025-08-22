const express = require("express")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon'

const UserRouter = express.Router();
//signup up 
//client username,email, password,from req.body
//npm bycrypt helps to hash the password 


UserRouter.post("/signup",async(req,res)=>{
    try {
        //check the user in Db
        const{username,email,Password}=req.body
        
        //has the raw password 
        bcrypt.hash(Password, saltRounds, function(err, hash) {
            //store has in you password db
            if(err){
                res.status(500).json({msg:"someting went wrong"})

            }else{
                console.log(Password,hash)
                res.status(201).json({mess:"signup success"})

            }
    // Store hash in your password DB.
});

        
    } catch (error) {  
        res.status(500).json({msg:"someting went wrong"})
        
    }
})





module.exports = UserRouter