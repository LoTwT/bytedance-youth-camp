// 问题驱动
// 手动创建步骤
// 开发思想 => 小步骤的开发思想 => 每次只做一件事

import ejs from "ejs"
import fs from "fs"
import prettier from "prettier"
import { fileURLToPath } from "url"
import path from "path"
import prettierConfig from "../../config/prettier.js"

export const createIndexTemplate = (config) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))

  const template = fs.readFileSync(
    path.resolve(__dirname, "./main.ejs"),
    "utf-8",
  )

  const code = ejs.render(template, {
    packageName: config.packageName,
    router: config.middleware.router,
    static: config.middleware.static,
    port: config.port,
  })

  return prettier.format(code, prettierConfig("babel"))
}
