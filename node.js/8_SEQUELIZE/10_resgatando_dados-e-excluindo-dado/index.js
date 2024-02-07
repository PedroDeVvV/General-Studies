const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const port = 3000;
const conn = require("./db/conn");

const User = require("./models/User");
const Address = require("./models/Address");

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

app.post("/address/delete", async (req, res) => {
  const id = req.body.id;
  const idUser = req.body.userId;

  await Address.destroy({
    where: { id: id },
  });
  res.redirect(`/users/edit/${idUser}`);
});

app.post("/address/create", async (req, res) => {
  const userId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    UserId: userId, //UserI
    street,
    number,
    city,
  };
  console.log(address);
  try {
    await Address.create(address);
    res.redirect(`/users/edit/${userId}`);
  } catch (err) {
    console.log(`Error on create adress: ${err}`);
  }
});

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
  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({ include: Address, where: { id: id } });
    res.render("useredit", { user: user.get({ plain: true }) });
  } catch (err) {
    console.log(`Error on get user edit: ${err}`);
    res.redirect('/')
  }
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
  // force:true restaura todas as entidades
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
