import {Layout, Menu, theme} from 'antd';
import * as React from 'react';
import MainMenu from "./MainMenu.component";
import {Outlet} from "react-router-dom";

const MainLayout: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ height: '100vh', overflow: 'auto' }}>
            <Layout.Sider breakpoint="lg" collapsedWidth="0">
                <div />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']} items={MainMenu} />
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
                    <div>Header</div>
                </Layout.Header>
                <Layout.Content style={{ margin: '24px 16px 0'}}>
                    <Outlet />
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>
                    <div>Multileaf &copy; 2023 Created by Multileaf Team</div>
                </Layout.Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
