import React from "react"
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';
import './layout.css';
import HeaderComponent from '../components/header-component';
const { Content, Footer } = Layout;


const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>MovieFirst</Footer>
    </Layout>
  )
}

export default PageLayout
