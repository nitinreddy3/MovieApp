// import stylesheet from 'antd/dist/antd.min.css'

import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const HeaderC = () => (
  <Header className="header">
    <div className="logo" />
  </Header>
);

export default HeaderC;