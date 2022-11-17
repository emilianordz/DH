let fs = require('fs')

let figura1File = fs.readFileSync(__dirname + "/figuras1.json", "utf-8")
let figura2File = fs.readFileSync(__dirname + "/figuras2.json", "utf-8")
let figura3File = fs.readFileSync(__dirname + "/figuras3.json", "utf-8")

let figura1 = JSON.parse(figuras1File)
let figura2 = JSON.parse(figuras2File)
let figura3 = JSON.parse(figuras3File)

module.exports = figura1
module.exports = figura2
module.exports = figura3
