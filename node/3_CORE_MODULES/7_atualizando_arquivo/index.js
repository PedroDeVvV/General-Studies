const http = require("http");
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {

        const nameNewLine = name + '\r\n'; //concatena o novo nome e quebra linha

        fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
            //appendFile anexa dados a um arquivo
            res.writeHead(302, {
                Location: "/"
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})