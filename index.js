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
      res.status(200).json(users);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

// GET request to /api/users/:id
server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

// POST request to /api/users
server.post("/api/users", (req, res) => {
  const user = req.body;

  if (!user.name || !user.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  } else {
    db.insert(user)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(error => {
        res
          .status(500)
          .json({
            error: "There was an error while saving the user to the database"
          });
      });
  }
});



// PUT request to /api/users/:id

// DELETE request to /api/users/:id

server.listen(port, () => console.log(`Port: ${port}`));
