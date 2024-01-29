const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const mysql = require("mysql");
const port = 3000;

app.engine("handlebars", exphs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "estudos",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Conectou ao MySQL");

  app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
});
