import React from "react";
import { Row, Col, Divider } from "antd";
import MainPageHeader from "../../components/header";
import Sidebar from "../../components/sidebar";
import Total from "../../components/total-order";
import OrderInfo from "../../components/order-info";
import "./index.scss";

function OrderPage() {
  const order = {
    city: "Ульяновск",
    point: "Нариманова 42",
    selectedCar: { company: "Hyndai", model: "i30 N" },
    date: [1, 2],
    color: "Любой",
    tariff: "Поминутно",
  };

  return (
    <div className="page">
      <Sidebar isMain={false} />
      <div className="page-content">
        <Row justify="center">
          <Col className="content-col" flex="1310px">
            <div className="steps-div">
              <div className="header">
                <MainPageHeader />
              </div>
              <Divider className="top" />
              <h3 className="order-number-text bold">Заказ номер RU58491823</h3>
              <Divider className="bottom" />
            </div>
            <Row className="location-info-row">
              <Col flex="0 0 900px" className="location-form-col">
                <h2 className="title-text regular">Ваш заказ подтверждён</h2>
                <Total />
              </Col>
              <Col className="order-info-col">
                <OrderInfo info={order} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default OrderPage;
