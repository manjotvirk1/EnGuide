const express = require('express');
const bcrypt = require('bcryptjs');
const router =  express.Router();
const jwt = require('jsonwebtoken');
const {body,validationResult} = require('express-validator')

const User = require('../models/Users');
var auth=require('../middleware/auth')

const JWT_SECRET = 'secret';

// route to create a new user
router.post('/createuser',async (req,res)=>{
    let success=false;
    const { userType, name,email,password } = req.body;

    if(!userType || !name || !email || !password){
        return res.status(400).json({msg: 'Please enter all fields'});
    }
    try{
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({success,error:'user already exist'})
        }
        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password,salt);
        user=await User.create({
            name:req.body.name,
            password:secPass,
            email:req.body.email,
            userType:req.body.userType
        })

        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        console.log(authToken);
        success=true;
        res.json({success,authToken});

    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Occured");
    } 

})



router.post('/login',async (req,res)=>{
    const { email,password } = req.body;
    let success=false;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    try{
        let user=await User.findOne({email});
        if(!user){
            success=false;
            return res.status(400).json({error:'Please login with correct credentials'});
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success=false;
            return res.status(400).json({success,error:'Please login with correct credentials'});
        }

        const payload={
            user:{
                id:user.id
            }
        }

        const authToken=jwt.sign(payload,JWT_SECRET);
        success=true;
        res.json({success,authToken});
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})



router.post('/getuser',auth, async (req,res)=>{
    try {
        userId=req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})


module.exports=router;