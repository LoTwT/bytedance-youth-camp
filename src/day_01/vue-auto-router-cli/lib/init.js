// 打印欢迎界面
const { promisify } = require("util")
const figlet = promisify(require("figlet"))
const clear = require("clear")
const chalk = require("chalk")
const { clone } = require("./download")

const log = (content) => console.log(chalk.green(content))

module.exports = async (name) => {
  // 打印欢迎页面
  clear()
  const data = await figlet(`lo welcome`)
  log(data)

  // 项目模板
  log("创建项目" + name)
  await clone("github:su37josephxia/vue-template", name)
}
