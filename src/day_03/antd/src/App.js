import logo from "./assets/logo.svg"

import "antd/dist/antd.css"
import "./style/App.css"
import { Input, Menu, Row, Col, Button } from "antd"
import { UnorderedListOutlined } from "@ant-design/icons"
import { BigLogo } from "./components/BigLogo"

function App() {
  const { SubMenu } = Menu

  return (
    <div className="App">
      <Row>
        <Col>
          <h1>
            <a id="logo" href="https://ant.design/index-cn">
              <img src={logo} alt="logo" /> Ant Design
            </a>
          </h1>
        </Col>
        <Col flex="1">
          <div id="searchbox">
            <Input placeholder="搜索" />
          </div>
        </Col>
        <Col>
          <Menu id="menu" mode="horizontal">
            <Menu.Item>设计</Menu.Item>
            <Menu.Item>文档</Menu.Item>
            <Menu.Item>组件</Menu.Item>
            <Menu.Item>资源</Menu.Item>
            <Menu.Item>国内镜像</Menu.Item>
            <SubMenu icon={<UnorderedListOutlined />}>
              <Menu.Item>子菜单项</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
      <Row justify="center">
        <BigLogo />
      </Row>
      <Row justify="center">
        <div id="btns">
          <Button type="primary" shape="round">
            开始使用
          </Button>
          <Button type="default" shape="round">
            设计语言
          </Button>
        </div>
      </Row>
    </div>
  )
}

export default App
