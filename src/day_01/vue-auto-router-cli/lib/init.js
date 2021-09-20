// 打印欢迎界面
const { promisify } = require("util")
const figlet = promisify(require("figlet"))
const clear = require("clear")
const chalk = require("chalk")
const { clone } = require("./download")
const open = require("open")

// 需要解决兼容性问题
// 实现一个 promise 风格的 spawn()
const spawn = async (...args) => {
  const { spawn } = require("child_process")

  return new Promise((resolve) => {
    // 子进程输出流 合并到 主进程
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)

    proc.on("close", () => resolve())
  })
}

const log = (content) => console.log(chalk.green(content))

module.exports = async (name) => {
  // 打印欢迎页面
  clear()
  const data = await figlet(`lo welcome`)
  log(data)

  // 项目模板
  log("create template" + name)
  // await clone("github:su37josephxia/vue-template", name)

  // 用子进程下载依赖
  log(`install dependencies...`)
  await spawn("npm", ["install"], { cwd: `./${name}`, shell: true })

  log("finish...")
  open("http://localhost: 8080")
  await spawn("npm", ["run", "serve"], { cwd: `./${name}`, shell: true })
}
