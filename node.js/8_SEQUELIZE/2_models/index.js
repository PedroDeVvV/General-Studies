const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const port = 3000;
const conn = require("./db/conn");

const User = require('./models/User')

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

conn.sync().then(() => {
  app.listen(3000)
}).catch((err) => console.log(err))
