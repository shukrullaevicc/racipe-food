import { MdOutlineFavorite } from "react-icons/md"; 
import { FaReceipt } from "react-icons/fa"; 
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <NavLink to="">Admin</NavLink>,
            },
            {
              key: "2",
              icon: <FaReceipt />,
              label: <NavLink to="/recipes">Recipes</NavLink>,
            },
            {
              key: "3",
              icon: <MdOutlineFavorite />,
              label: <NavLink to="/favorites">Favorites</NavLink>,
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;