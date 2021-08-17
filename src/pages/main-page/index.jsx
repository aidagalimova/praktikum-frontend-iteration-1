import React from "react";
import { Layout } from "antd";
import Sidebar from "../../components/sidebar";
import "./index.scss";
import MainPageContent from "../../components/main-page-content";

const { Content, Sider } = Layout;
function MainPage() {
  return (
    <div className="page">
      <Layout>
        <Sider theme="light" className="sider">
          <Sidebar />
        </Sider>
        <Content className="content">
          <MainPageContent />
        </Content>
      </Layout>
    </div>
  );
}
export default MainPage;
