import React from "react";
import { Layout } from "antd";
import Sidebar from "../../components/sidebar";
import "./index.scss";
import MainPageContent from "../../components/main-page-content";
import Slider from "../../components/slider";

const { Content } = Layout;

function MainPage() {
  return (
    <div className="page">
      <Layout>
        <Sidebar isMain />
        <Content className="content">
          <MainPageContent />
        </Content>
        <Content className="slider">
          <Slider />
        </Content>
      </Layout>
    </div>
  );
}
export default MainPage;
