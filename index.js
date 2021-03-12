require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/users",  (req, res) => {
  const users = [
    {
      id: 1,
      name: 'fernando',
    },
    {
      id: 2,
      name: 'marta',
    }
  ];
  res.json(users);
});
app.post("/users",  (req, res) => {
    const user = req.body;
    user.id = 86546;

    let result = {
        mesagge: "User created",
        user
    }
  res.status(201).json(result);
});
app.put("/users/:id",  (req, res) => {

    const {id} = req.params;
    const user = req.body;

    user.id = id;

    let result = {
        mesagge: "User updated",
        user
    }
  res.status(201).json(result);
});
app.patch("/users",  (req, res) => {
    let result = {
        mesagge: "User updated with patch"
    }
  res.status(201).json(result);
});
app.delete("/users/:id",  (req, res) => {

    const {id} = req.params;

    let result = {
        mesagge: `User with id: ${id} deleted`
    }
  res.json(result);
});

app.listen(port, () => {
  console.log(`El puerto esta activo en http://localhost:${port}`);
});
