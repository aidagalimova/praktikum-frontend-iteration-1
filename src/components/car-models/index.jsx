import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Spin } from "antd";
import CarModel from "../car-model";
import "./index.scss";
import Radios from "../car-models-radios";
import getAllCars from "../../services/cars";

function CarModels() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const [radioValue, setRadioValue] = useState("all");
  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  if (cars !== null) {
    const carEls = cars
      .filter((car) => {
        if (radioValue === "all") {
          return car;
        }
        if (radioValue === "economy" && car.type !== null) {
          return car.type.name === "Супер-эконом";
        }
        return car.type !== null && car.type.name === "Люкс";
      })
      .map((car) => (
        <CarModel key={car.id} car={car} radioValue={radioValue} />
      ));

    const handleRadioChange = (e) => {
      setRadioValue(e.target.value);
    };
    return (
      <>
        <Radios handleRadioChange={handleRadioChange} radioValue={radioValue} />
        <Row className="cars-row">{carEls}</Row>
      </>
    );
  }
  return (
    <div>
      <Radios radioValue={radioValue} />
      <Spin size="large" />
    </div>
  );
}

export default CarModels;
