import React, { useState } from "react";
import { Divider, Col, Row } from "antd";
import LocationForm from "../../components/location-form";
import FormSteps from "../../components/steps";
import Sidebar from "../../components/sidebar";
import MainPageHeader from "../../components/header";
import OrderInfo from "../../components/order-info";
import "./index.scss";

const locations = [
  {
    id: 0,
    city: "Казань",
    points: [
      { id: 0, name: "Нариманова 42" },
      { id: 1, name: "Нариманова 43" },
      { id: 2, name: "Нариманова 44" },
      { id: 3, name: "Нариманова 45" },
    ],
  },
  {
    id: 1,
    city: "Ульяновск",
    points: [{ id: 0, name: "Нариманова 42" }],
  },
  {
    id: 2,
    city: "Москва",
    points: [{ id: 0, name: "Нариманова 42" }],
  },
  {
    id: 3,
    city: "Самара",
    points: [{ id: 0, name: "Нариманова 42" }],
  },
];

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
      <Sidebar />
      <div className="page-content">
        <Row justify="center">
          <Col flex="1310px">
            <div className="header">
              <MainPageHeader />
            </div>
            <Divider />
            <FormSteps />
            <Divider />
            <Row >
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
