# koa-setup

```shell
createKoaApp
```

## problems

- execa

  ```javascript
  execa("yarn", {
    stdio: "inherit", // stdio: [2, 2, 2] 不可用
  })
  ```

- esm

  ```javascript
  // esm 规范下没有 __dirname，需要自行模拟
  import { fileURLToPath } from "url"
  import path from "path"
  // fileURLToPath(import.meta.url) 得到的是文件路径，path.resolve() 包裹一层，得到文件夹
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  ```

- terminal
  - windows 命令行没有 `rm -rf`，但在 `git bash` 中能够正常运行
  - `git bash` 不能用方向键选择 `inquirer` 的 `checkbox`
