const express = require("express"); // importing express
const app = express(); // starting express

app.get("/", function (req, res) {
  res.send("Welcome to my Website!");
}); // defining initial application route

app.get("/blog", function (req, res) {
  res.send("Welcome to my Blog");
});

app.get("/hi/:name/:company/:favouriteColour?", function (req, res) {
  // non-mandatory parameters have a '?' later
  let name = req.params.name;
  let company = req.params.company;
  let favoriteColour = req.params.favoriteColour;

  if (favoriteColour) {
    res.send(`<h1> Hello, ${name} from the ${company} company. You like ${favoriteColour}</h1>`);
  } else {
    res.send(`<h1> Hello, ${name} from the ${company} company </h1>`);
  }
});

app.listen(4001, function (error) {
  error
    ? console.log("Oh no! An error has occurred!")
    : console.log("Server started successfully");
});
