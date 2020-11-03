import '../App.css';
 
import logoo from '../images/easewhite2.png';
import logo2 from '../images/easewhite.png';

import React,{useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function SiderDemo (){
  const [collapsed, setCollapsed]= useState(false);
  
  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  
    return (
      < >
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ minHeight: '100vh' }}>
          <div  style={{
                        height: 64,
                        backgroundImage: `url(${collapsed ? logoo : logo2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        filter: "dark" && "invert(1) brightness(200%)"
                    }}  />
          
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

          <SubMenu key="sub1" icon={<PieChartOutlined />} title="Cedulas">
              <Menu.Item key="3">Ingresos</Menu.Item>
              <Menu.Item key="4">Egresos</Menu.Item>
             
            </SubMenu>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
       {/*  <Layout className="site-layout">
          <Header className="header" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>




            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Sistema de Cedulas 1.0 ©2020 Desarrollado por la <a target="_blank" href="http://auditoriadurango.gob.mx/">EASE</a></Footer>
        </Layout> */}
      </>
    );
    
  }


export default SiderDemo;
