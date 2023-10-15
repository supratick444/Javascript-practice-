
//Express series starts here !!

// step 1 : we need to have the express module 
// npm i express 
// once installed , we can use it !!

const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    return res.send("hello from Homepage");
});

app.get('/about', (req,res) => {
    return res.send("send from about !!" + " hey " + req.query.name);  
});

//https://didactic-guide-x7pv45ww954hv56-8000.app.github.dev/about?name=sonu  
//req.query.name = sonu 

app.listen(8000 , ()=> console.log("stared"));