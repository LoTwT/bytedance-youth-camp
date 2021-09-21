import inquirer from "inquirer"

export const USER_INPUT_INFO = {
  packageName: "PACKAGE_NAME",
  port: "PORT",
  middleware: "MIDDLEWARE",
  middlewareList: {
    router: "Koa-Router",
    static: "Koa-Static",
  },
}

export const getUserInput = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: USER_INPUT_INFO.packageName,
      message: "set package name",
      default: () => "koa-setup-default",
    },
    {
      type: "number",
      name: USER_INPUT_INFO.port,
      message: "set port",
      default: () => 8080,
    },
    {
      type: "checkbox",
      name: USER_INPUT_INFO.middleware,
      choices: [
        { name: USER_INPUT_INFO.middlewareList.router },
        { name: USER_INPUT_INFO.middlewareList.static },
      ],
    },
  ])
}
