const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5001, () => {
  console.log("server has started on port 5001");
});
