import React from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  carModelChange,
  colorChange,
  PriceSet,
} from "../../store/actions/order-info";
import "./index.scss";

const { Meta } = Card;
function CarModel({ car }) {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.order.selectedCar);

  const handleCarModelChange = (value) => {
    dispatch(carModelChange(value));
    dispatch(PriceSet(value.priceMin, value.priceMax));
    dispatch(colorChange(null));
  };
  return (
    <Card
      className={`model-card ${
        selectedCar && car.id === selectedCar.id ? "model-card-active" : ""
      }`}
      onClick={() => handleCarModelChange(car)}
    >
      <Meta
        title={car.name}
        description={`${car.priceMin} - ${car.priceMax}  ₽`}
      />
      <Card
        cover={
          <img
            src={
              car.img.path[0] === "d"
                ? car.img.path
                : `https://api-factory.simbirsoft1.com/${car.img.path}`
            }
            alt="car"
          />
        }
        bordered={false}
        className="car-img"
      />
    </Card>
  );
}

export default CarModel;
