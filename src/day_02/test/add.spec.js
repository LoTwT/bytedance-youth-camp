const add = require("./add.js")

// function output
//   1. return value
//   2. call other function
//   3. change state
//   4. throw error

test("should 1 + 1 = 2", () => {
  // jest => 匹配器概念
  // 准备测试数据 => given
  const a = 1
  const b = 1
  // 触发测试动作 => when
  const res = add(a, b)
  // 验证测试结果 => then
  expect(res).toBe(2)
})
