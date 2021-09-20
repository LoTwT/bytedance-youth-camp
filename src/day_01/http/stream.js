const fs = require("fs")

// 1. copy
const readStream = fs.createReadStream("./1.png")
const writeStream = fs.createWriteStream("./2.png")
readStream.pipe(writeStream)
