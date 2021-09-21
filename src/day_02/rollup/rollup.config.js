import json from "@rollup/plugin-json"
import { terser } from "rollup-plugin-terser"
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./index.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      plugins: [
        terser(), // 代码压缩
      ],
    },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs", // cjs => common.js
    },
  ],
  plugins: [
    json(),
    nodeResolve(), // rollup 默认不支持 node_modules 解析
    commonjs(), // 转换只支持 commonjs 的模块至 ES6, 使其能使用 rollup
  ],
  external: ["vue"], // 配置 package.json 里的 peerDependencies，而不是默认打包依赖所有的内容
}
