const path = require('path')

const customPath = "/relatorios/matheus/relatorio1.pdf"

console.log(path.dirname(customPath)) //diretorio do arquivo
console.log(path.basename(customPath)) // nome do arquivo base
console.log(path.extname(customPath)) // nome da extensão
// console.log(path.dirname(customPath))