import React from "react";
import { Button, Layout } from "antd";
import MainPageHeader from "../header";
import MainPageFooter from "../footer";
import "./index.scss";

const { Header, Content, Footer } = Layout;
function MainPageContent() {
  return (
    <Layout className="main-page-content">
      <Header className="header">
        <MainPageHeader />
      </Header>
      <Content className="content">
        <h1 className="text">Каршеринг</h1>
        <h1 className="name-text">Need for drive</h1>
        <h3 className="discription-text">
          Поминутная аренда авто твоего города
        </h3>
        <Button className="btn">
          <h1 className="btn-text">Забронировать</h1>
        </Button>
      </Content>
      <Footer className="footer">
        <MainPageFooter />
      </Footer>
    </Layout>
  );
}

export default MainPageContent;
