import ejs from "ejs"
import fs from "fs"
import prettier from "prettier"
import { fileURLToPath } from "url"
import path from "path"
import prettierConfig from "../../config/prettier.js"

export const createPackageTemplate = (config) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))

  const template = fs.readFileSync(
    path.resolve(__dirname, "./package.ejs"),
    "utf-8",
  )

  const code = ejs.render(template, {
    packageName: config.packageName,
    router: config.middleware.router,
    static: config.middleware.static,
  })

  return prettier.format(code, prettierConfig("json"))
}
