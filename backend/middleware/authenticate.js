const jwt=require("jsonwebtoken");
const User=require("../model/userSchema");

const Authenticate=async (req,res,next)=>{
    try{
        const token=req.cookies.jwttoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){throw new Error('User not Fount')}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    }catch(err){
        res.status(401).send('unauthorized');
        console.log(err);
    }
}


module.exports=Authenticate;