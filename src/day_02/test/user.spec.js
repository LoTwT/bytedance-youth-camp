const User = require("./User.js")

// 为了测试 (程序的可测试性)
// 组织代码 input output

// 测试 => oop 单一职责 solid 思想...

test("should getName", () => {
  // given
  const user = new User("xiaohong")
  // when
  user.setName("xiaohei")
  // then
  expect(user.getName()).toBe("xiaohei")
})
