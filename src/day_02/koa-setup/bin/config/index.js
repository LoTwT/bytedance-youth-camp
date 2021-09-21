import { USER_INPUT_INFO } from "../utils/userInput.js"

export const createConfig = (userInput) => {
  const hasMiddleware = (name) =>
    userInput[USER_INPUT_INFO.middleware].indexOf(name) !== -1

  return {
    packageName: userInput[USER_INPUT_INFO.packageName],
    port: userInput[USER_INPUT_INFO.port],
    middleware: {
      router: hasMiddleware(USER_INPUT_INFO.middlewareList.router),
      static: hasMiddleware(USER_INPUT_INFO.middlewareList.static),
    },
  }
}
