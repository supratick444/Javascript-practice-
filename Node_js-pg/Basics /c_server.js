//creating server 

//request / response ko konsa module handle karta haa 

const http = require('http');

const myserver = http.createServer((request,response)=>{
    response.end("Hello from server");
})

myserver.listen(8000 , ()=> console.log("Server Started !!"));

// congratulation you have leart to create a server !!




