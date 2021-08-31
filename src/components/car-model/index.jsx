import { Card } from "antd";
import React from "react";
import "./index.scss";

const { Meta } = Card;
function CarModel({ car, handleCarModelChange, selectedCar }) {
  return (
    <Card
      className={`model-card ${
        selectedCar && car.id === selectedCar.id ? "model-card-active" : ""
      }`}
      onClick={() => handleCarModelChange(car)}
    >
      <Meta title={car.model} description={car.price} />
      <Card
        cover={<img src={car.img} alt="car" />}
        bordered={false}
        className="car-img"
      />
    </Card>
  );
}

export default CarModel;
