import express from 'express'; // Help create a server

const app = express();

// Creating our route, example: "http://localhost:3333/users"

app.get("/", (request, response) => {

    return response.json({message: "Hello World!"});
})

app.post("/", (request, response) => {

   return response.json({message: "Data has been successfully saved"})
})

app.listen(3333, () => console.log("Server is running!"));

