import React, { useEffect, useState } from "react"
import antDesign from "../assets/AntDesign.svg"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const icons = [MailOutlined, AppstoreOutlined, SettingOutlined]

export function BigLogo() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrent((current + 1) % icons.length)
    }, 1000)

    return () => clearInterval(interval)
  })

  let Icon = icons[current] ?? MailOutlined
  return (
    <>
      <div id="biglogo">
        <img src={antDesign} alt="biglogo"></img>
        <Icon id="dot" />
      </div>
    </>
  )
}
