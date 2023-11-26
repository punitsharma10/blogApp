const express=require('express');
const router=express.Router();
const User=require("../model/userSchema");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

router.get('/',(req,res)=>{
    res.send(`helloWorldfrom server`)
})


     // By promise Method

// router.post('/register',(req,res)=>{
//     const{name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword)
//     {
//         return res.json({status:422,message:"please provide all details"}) 
//     }
//     User.findOne({})
//     .then((userExists)=>{
//         if(userExists)
//         {
//             return res.status(422)({errpr:"user already exists"});
//         }
//         const user=new User({name,email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered"});
//         }).catch((err)=>res.status(500).json({error:"registration failed"}))
//     }).catch(err=>{console.log(err);});

//     // console.log(name);
//     // console.log(phone);
//     // res.json({message:req.body});
//     // res.send("register page")
// })

              // Async Await

router.post('/register',async (req,res)=>{
    const{name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.json({status:422,message:"please provide all details"}) 
    }
    try{
        const userExist=await User.findOne({email:email});
        if(userExist)
        {
            return res.status(422).json({error:"email already exists"});
        }
        else if(password!=cpassword)
        {
            return res.status(422).json({error:"password not match"});
        }
        else{
            const user=new User({name,email,phone,work,password,cpassword});

            await user.save();
    
            res.status(201).json({message:"user registered"});
        }   
    }catch(err){
        console.log(err)
    }
});



                      // login rout

router.post('/signin',async (req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email || !password)
        {
            return res.json({status:400,message:"please provide all details"}) 
        }

        const userLogin=await User.findOne({email:email});

        if (userLogin) {
            const isMatch=await bcrypt.compare(password,userLogin.password);

            const token= await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwttoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });

            if(!isMatch)
            {
                res.status(400).json({error:"invalid credentials"})
            }
            else{
                res.json({status:200,message:"Login successfully"});
            }
            
        } else {
            res.status(400).json({error:"invalid credentials"})
        }
    } catch (err) {
        console.log(err);
        
    }

})

module.exports=router;