const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

const Task = require("./models/Task");

app.engine("handlebars", exphbs.engine()); //especifica com template engine estou usando
app.set("view engine", "handlebars"); //express usará handlebars como mecanismo de visualização

app.use(
  express.urlencoded({
    extended: true, //permite ler paramêtros no body da requisição
  })
);

app.use(express.json());

app.use(express.static("public")); //ativa a pasta de arquivos estáticos "public"

conn
  .sync()
//   .syn({force:true})
  .then(() => {
    app.listen(3000)
    console.log(`Server is running on port 3000`);
  })
  .catch(() => {
    console.log(`Error on connetion database: ${err}`);
  });
