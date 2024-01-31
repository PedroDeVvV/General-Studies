const express = require("express");
const app = express();
const exphs = require("express-handlebars");
const mysql = require("mysql");
const port = 3000;
const pool = require("./db/conn");

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

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM books WHERE id = ${id}`;

  pool.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pagesqty;
  console.log("page: ", req.body);
  const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' where id = ${id}`;
  console.log(sql);
  pool.query(sql, function (err) {
    if (err) {
      console.log("oi?");
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("editbooks", { book });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const book = data[0];

    res.render("book", { book });
  });
});

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";

  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;
    res.render("books", { books });
  });
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pagesqty;

  const query = `INSERT INTO books(title, pageqty) VALUES('${title}', '${pageqty}')`;

  pool.query(query, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000);
