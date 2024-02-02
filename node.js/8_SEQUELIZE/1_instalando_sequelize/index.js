const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const port = 3000;
const conn = require("./db/conn");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

// rotas

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000);
