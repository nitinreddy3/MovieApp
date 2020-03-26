import { Link } from "gatsby"

import React from "react"
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
    >
    </Menu>
  </Header>
)

export default HeaderComponent
