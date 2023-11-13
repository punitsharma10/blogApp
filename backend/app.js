const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send(`helloWorld`)
})

app.get('/about',(req,res)=>{
    res.send(`helloWorld`)
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


app.get('*', (req, res) => {
    res.send('Not a valid route');
});

console.log('heyyyyy');

app.listen(8080,()=>{
    console.log(`server running on port 8080`);
})