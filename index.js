const express = require("express");
const app = express();
const port = 3000;

const data = [
  {
    id: 0,
    name: "p1",
    color: "red",
    price: 100,
  },
  {
    id: 1,
    name: "p3",
    color: "blue",
    price: 200,
  },
  {
    id: 2,
    name: "p3",
    color: "black",
    price: 300,
  },
];
app.get("/home", (req, res) => res.send("Welcome to our APIs!"));
app.get("/", (req, res) => res.redirect("/home"));
app.get("/products", (req, res) => res.send(data));
app.get("/products/:id", (req, res) => res.send(data[req.params.id]));
app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
