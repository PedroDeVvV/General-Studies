const path = require('path')

console.log(path.resolve('teste.txt'))

const folder = "relatorios";
const filename = "pedro.txt"

const finalPath = path.join('/', 'arquivos', folder, filename)

console.log(finalPath)