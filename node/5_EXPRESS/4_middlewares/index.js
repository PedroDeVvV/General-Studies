const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {

    req.authStatus = true;

    if (req.authStatus) {
        console.log("está logado")
        next();
    } else {
        console.log("Não está logado, faça o login para continuar")
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/pag.html`)
})

app.listen(port, () => {
    console.log("Server is running!")
})