import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card, Col, Row } from 'antd';
import LayoutC from '../components/LayoutC';
import Movie from '../components/Movie';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const App = () => {
  return <LayoutC>
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Movie />
        </Col>
        <Col span={8}>
          <Movie />

        </Col>
        <Col span={8}>
          <Movie />

        </Col>
        <Col span={8}>
          <Movie />

        </Col>
        <Col span={8}>
          <Movie />

        </Col>
        <Col span={8}>
          <Movie />

        </Col>
      </Row>
    </div>
  </LayoutC>
}

export default App;