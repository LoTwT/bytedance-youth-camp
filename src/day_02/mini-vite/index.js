const Koa = require("koa")
const fs = require("fs")
const path = require("path")

const app = new Koa()
const port = 3000

// 生成一个服务进行拦截，生成浏览器能够识别的代码
app.use((ctx) => {
  const url = ctx.request.url

  if (url === "/") {
    // 加载 html
    ctx.body = fs.readFileSync("./index.html", "utf-8")
  } else if (url.endsWith(".js")) {
    // 找到对应路径，去加载，给到浏览器
    const p = path.resolve(__dirname, url.slice(1))

    // 做一个标识
    // 如果 import * from "vue" 就去 node_modules 内读取
    // regexr.com 好用的正则工具网站
    const source = fs.readFileSync(p, "utf-8")
    ctx.type = "text/javascript"
    ctx.body = rewriteImport(source)
  } else if (url.startsWith("/@modules")) {
    // 应该去 node_modules 内查找
    const moduleName = url.replace("/@modules", "")
    // url => vue
    // const prefix = path.resolve(__dirname, "node_modules", moduleName)
    const prefix = __dirname + "/node_modules" + moduleName
    // 去 package.json 中读取 module
    const module = require(prefix + "/package.json").module
    const code = fs.readFileSync(path.resolve(prefix, module), "utf-8")
    ctx.type = "text/javascript"
    ctx.body = rewriteImport(code)
  }
})

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)

function rewriteImport(source) {
  return source
    .replace(/(from\s+["|'])(?![\.\/])/g, "$1/@modules/")
    .replace(/process\.env\.NODE_ENV/g, `"development"`)
}
