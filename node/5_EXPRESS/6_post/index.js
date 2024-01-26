const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const basePath = path.join(__dirname, 'templates')

//ler o body

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`${name} tem ${age} anos.`)

    res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log(`Estamos buscando pelo usuário ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/pag.html`)
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}!`)
})