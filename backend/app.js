const express=require('express')
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
app.use(express.json());

// const user=require('./model/userSchema');

app.use(require('./router/auth'));

const DB=process.env.DATABASE;
const PORT=process.env.PORT;


mongoose.connect(DB,{
}).then(()=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log('error');
});


const middleware=(req,res,next)=>{
    console.log("middleware");
    next();
}

app.get('/',(req,res)=>{
    res.send(`helloWorld`)
})

app.get('/about',middleware,(req,res)=>{
    console.log(`about`);
    res.send(`helloWorldabout`)
})

app.get('/contact',(req,res)=>{
    res.send(`hello`)
})

app.get('/signin',(req,res)=>{
    res.send(`login`)
})

app.get('/signup',(req,res)=>{
    res.send(`signup`)
})

app.get('*',(req,res)=>{
    res.send('Not a valid route');
});

// console.log('heyyyyy');

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})