import React from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { carModelChange } from "../../store/actions/order-info";
import "./index.scss";

const { Meta } = Card;
function CarModel({ car }) {  
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.order.selectedCar);

  const handleCarModelChange = (value) => {
    dispatch(carModelChange(value));
  };
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
