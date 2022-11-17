let fs = require('fs')

let bicicletasFile = fs.readFileSync(__dirname + "/bicicletas.json", "utf-8")
let bicicletas = JSON.parse(bicicletasFile)

module.exports = bicicletas