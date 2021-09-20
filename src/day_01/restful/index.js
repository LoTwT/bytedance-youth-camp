const Koa = require("koa")
const app = new Koa()
const port = 3000

// 动态编程
// 1. 根据模型文件，自动加载模型
const { loadModel } = require("./framework/loader")
const config = require("./conf")
loadModel(config)(app)

// 2. 自动产生路由，注册通配路由
// eg.
// /api/user GET
// /api/user/1 GET
// /api/users POST PUT PATCH DELETE
const bodyParser = require("koa-bodyparser")
app.use(bodyParser())
const restful = require("./framework/router")
app.use(restful)

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`),
)
