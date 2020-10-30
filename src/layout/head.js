import '../App.css';


import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


function head(){


  
    return (
      
        <Layout className="site-layout">
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
        
        </Layout>
     
    );
    
  }


export default head;
