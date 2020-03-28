import { Layout, Card, Col, Row } from 'antd';
import stylesheet from 'antd/dist/antd.min.css'
import HeaderC from './HeaderC';

const { Content } = Layout;

const LayoutC = (props) => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <HeaderC className="header">
      <div className="logo" />
    </HeaderC>
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
      <div className="site-card-wrapper">
        {props.children}
      </div>
    </Content>
  </Layout>
);

export default LayoutC;