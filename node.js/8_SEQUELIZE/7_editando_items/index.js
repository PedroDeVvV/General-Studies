const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const port = 3000;
const conn = require("./db/conn");

const User = require("./models/User");

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

app.post("/users/update", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  await User.update(userData, { where: { id: id } });
  res.redirect('/')
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });
  res.render("useredit", { user });
});

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await User.destroy({ where: { id: id } });
  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });
  console.log(user);

  res.render("userview", { user });
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  await User.create({ name, occupation, newsletter });
  res.redirect("/");
});

app.get("/", function (req, res) {
  User.findAll({ raw: true })
    .then((users) => {
      res.render("home", { users: users });
    })
    .catch((err) => console.log(err));
});
conn
  .sync()
  // .sync({force: true})
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
