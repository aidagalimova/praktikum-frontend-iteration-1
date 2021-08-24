import React, { useState } from "react";
import { Divider, Col, Row } from "antd";
import LocationForm from "../../components/location-form";
import FormSteps from "../../components/steps";
import Sidebar from "../../components/sidebar";
import MainPageHeader from "../../components/header";
import OrderInfo from "../../components/order-info";
import locations from "./consts";
import "./index.scss";

function MakeOrderPage() {
  const [order, setOrder] = useState({});

  const handleCityChange = (value) => {
    setOrder({
      ...order,
      city: value,
    });
    return order;
  };

  const handlePointChange = (value) => {
    setOrder({ ...order, point: value });
  };

  return (
    <div className="page">
      <Sidebar isMain={false} />
      <div className="page-content">
        <Row justify="center">
          <Col flex="1310px">
            <div className="header">
              <MainPageHeader />
            </div>
            <Divider />
            <FormSteps />
            <Divider />
            <Row>
              <Col flex="0 0 905px" className="location-form-col">
                <LocationForm
                  order={{ city: order.city, points: order.points }}
                  handleCityChange={handleCityChange}
                  handlePointChange={handlePointChange}
                  locations={locations}
                />
              </Col>
              <Col flex="50px" className="divider-col">
                <Divider type="vertical" />
              </Col>
              <Col>
                <OrderInfo info={order} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MakeOrderPage;
