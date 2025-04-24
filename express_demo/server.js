
const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send("Jay Ganesh...!");
});

app.get('/twitter',(req,res) => {
    res.send('pranavmaske');    
});

app.get('/login',(req,res) => {
    res.send('<h1>Please login with correct credentials</h1>');
});

app.listen(port,() => {
    console.log(`Example app listening port ${port}`);
});