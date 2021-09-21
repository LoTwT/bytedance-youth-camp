import fs from "fs"
import { createConfig } from "../config/index.js"
import { getUserInput } from "./userInput.js"
import { createIndexTemplate } from "../template/main/mainTemplate.js"
import { createPackageTemplate } from "../template/package/packageTemplate.js"
import execa from "execa"

// Map<string, Function>
const todoMap = new Map()
todoMap.set("/main.js", createIndexTemplate)
todoMap.set("/package.json", createPackageTemplate)

export const create = async () => {
  // 获得用户输入
  const inputConfig = createConfig(await getUserInput())

  const rootPath = inputConfig.packageName

  // 核心：自动化思维
  // 1. 创建项目文件夹
  fs.mkdirSync(rootPath)

  // 2. 创建 index.js (入口文件)
  // 3. 创建 package.json, 基于数据生成
  for (const [fileName, fn] of todoMap) {
    fs.writeFileSync(rootPath + fileName, fn(inputConfig))
  }

  // 4. 安装依赖
  execa("yarn", {
    cwd: rootPath,
    stdio: "inherit",
  })
}
