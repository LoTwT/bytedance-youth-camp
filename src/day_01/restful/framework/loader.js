const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose")

/**
 * 加载器 => 根据文件夹加载
 * @param {*} dir 文件夹
 * @param {*} callback
 */
const load = (dir, callback) => {
  const url = path.resolve(__dirname, dir)
  const files = fs.readdirSync(url)
  files.forEach((fileName) => {
    fileName.replace(".js", "")
    const file = require(`${url}/${fileName}`)
    callback(fileName, file)
  })
}

const loadModel = (config) => (app) => {
  mongoose.connect(config.db.url, config.db.options)
  const conn = mongoose.connection
  conn.on("error", () => console.error("数据库连接失败"))

  app.$model = {}
  load("../model", (fileName, { schema }) => {
    console.log(`load model: ${fileName}, ${schema}`)
    app.$model[fileName] = mongoose.model(fileName, schema)
  })
}

module.exports = {
  loadModel,
}
