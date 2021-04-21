const express = require('express'); // importing express
const app = express(); // starting express

app.listen(4000, function(error){

 error ? console.log("Oh no! An error has occurred!") : console.log("Server started successfully"); 
})

