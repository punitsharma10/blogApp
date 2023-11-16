const express=require('express');
const router=express.Router();
const User=require("../model/userSchema");

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
            return res.status(422).json({error:"user already exists"});
        }

        const user=new User({name,email,phone,work,password,cpassword});
        await user.save();
        res.status(201).json({message:"user registered"});   
    }catch(err){
        console.log(err)
    }
});

module.exports=router;