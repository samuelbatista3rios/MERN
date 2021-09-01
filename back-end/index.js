const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Desafio";
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const desafioRouter = require("../back-end/routers/desafio");
app.use("/desafio", desafioRouter);

app.listen(9000, function () {
  console.log("Server started!");
});
