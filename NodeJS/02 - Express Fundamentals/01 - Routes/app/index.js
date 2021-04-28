const express = require('express'); // importing express
const app = express(); // starting express

app.get("/", function(req, res) {
    res.send("Welcome to my Website!");

}); // defining initial application route

app.get("/blog", function(req, res) {
    res.send("Welcome to my Blog");

}); 

app.listen(4001, function(error){

 error ? console.log("Oh no! An error has occurred!") : console.log("Server started successfully"); 
})

