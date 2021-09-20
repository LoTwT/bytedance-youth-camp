// 读文件列表
// 拼代码 模板渲染的方式

const fs = require("fs")
const handlebars = require("handlebars")
const chalk = require("chalk")

module.exports = async () => {
  // 获取列表
  const list = fs
    .readdirSync("./src/views")
    .filter((file) => file !== "Home.vue")
    .map((file) => ({
      name: file.replace(".vue", "").toLowerCase(),
      file,
    }))

  /**
   * 根据 hbs 模板动态渲染 views 下的页面
   * 生成路由 + 增加导航
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板
   */
  const compile = (meta, filePath, templatePath) => {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString()
      const result = handlebars.compile(content)(meta)

      fs.writeFileSync(filePath, result)
      console.log(chalk.green(`${filePath} create successfully`))
    }
  }

  // 生成路由定义
  compile({ list }, "./src/router.js", "./template/router.js.hbs")
  // 生成菜单
  compile({ list }, "./src/App.vue", "./template/App.vue.hbs")
}
