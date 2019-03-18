// implement your API here
const express = require("express");
const db = require("./data/db.js");
const port = 5000;

const server = express();

server.use(express.json());


// GET request to /api/users
server.get("/api/users", (req, res) => {
  db.find()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    res.status(500).json({ error: "The users information could not be retrieved." })
  })
})

// GET request to /api/users/:id

// POST request to /api/users





server.listen(port, () => console.log(`Port: ${port}`));