const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "Pedro",
        surname: "Henrique",
        age: 19
    }

    const word = "frase de teste"

    res.render('home', {user: user, word})
})

app.listen(3000, () => {
    console.log("App is running na porta 3000")
})