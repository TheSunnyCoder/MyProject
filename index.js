const express=require('express');
const app=express();
require('dotenv').config();
const PORT=4000;

app.get('/',(req,res)=>{
    res.send('hello world');

})

app.get('/twitter',(req,res)=>{
res.send('sunny raj');
})

app.get('/login',(req,res)=>{
    res.send('<h1>hi sunny this is h1 tag </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${PORT}`)
})