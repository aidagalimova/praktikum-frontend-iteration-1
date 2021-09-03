import React, { useState } from "react";
import { Divider, Col, Row } from "antd";
import FormSteps from "../../components/steps";
import Sidebar from "../../components/sidebar";
import MainPageHeader from "../../components/header";
import LocationForm from "../../components/location-form";
import OrderInfo from "../../components/order-info";
import CarModels from "../../components/car-models";
import AdditionsForm from "../../components/additions-form";
import locations, { cars } from "./consts";
import "./index.scss";

function MakeOrderPage() {
  const [curStep, setCurStep] = useState(2);
  const onStepChange = (cur) => {
    setCurStep(cur);
  };

  const [order, setOrder] = useState({
    city: "Ульяновск",
    point: "Нариманова 42",
    selectedCar: { company: "Hyndai", model: "i30 N" },
    color: "Любой",
    tariff: "Поминутно",
  });

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
  const handleCarModelChange = (car) => {
    setOrder({ ...order, selectedCar: car });
  };
  const handleColorChange = (e) => {
    setOrder({ ...order, color: e.target.value });
  };

  const handleDateChange = (date) => {
    const duration = [];
    if (date.asHours() >= 24) {
      duration[0] = Math.floor(date.asDays());
      if (date.asHours() % 24 !== 0) {
        duration[1] = date.asHours() % 24;
      }
    } else {
      duration[1] = date.asHours() % 24;
    }
    setOrder({ ...order, date: duration });
  };
  const handleTariffChange = (e) => {
    setOrder({ ...order, tariff: e.target.value });
  };
  const handleServicesChange = (value) => {
    setOrder({ ...order, services: value });
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
              <Divider />
              <FormSteps
                curStep={curStep}
                onStepChange={onStepChange}
                order={order}
              />
              <Divider />
            </div>
            <Row className="location-info-row">
              <Col flex="0 0 900px" className="location-form-col">
                {curStep === 0 && (
                  <LocationForm
                    order={{
                      city: order.city,
                      points: order.points,
                      point: order.point,
                    }}
                    handleCityChange={handleCityChange}
                    handlePointChange={handlePointChange}
                    locations={locations}
                  />
                )}
                {curStep === 1 && (
                  <CarModels
                    cars={cars}
                    selectedCar={order.selectedCar}
                    handleCarModelChange={handleCarModelChange}
                  />
                )}
                {curStep === 2 && (
                  <AdditionsForm
                    handleColorChange={handleColorChange}
                    handleDateChange={handleDateChange}
                    handleTariffChange={handleTariffChange}
                    handleServicesChange={handleServicesChange}
                    color={order.color}
                    tariff={order.tariff}
                    date={order.date}
                  />
                )}
              </Col>
              <Col className="order-info-col">
                <OrderInfo
                  info={order}
                  curStep={curStep}
                  onStepChange={onStepChange}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MakeOrderPage;
