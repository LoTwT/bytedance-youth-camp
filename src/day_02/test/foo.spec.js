const foo = require("./foo.js")
const bar = require("./bar.js")

// mock
jest.mock("./bar.js", () => {
  // function => 属性
  return jest.fn()
})

test("foo", () => {
  foo()

  expect(bar).toHaveBeenCalled()
})
