import React, { useState } from "react";
import { connect } from "react-redux";
import { Row } from "antd";
import CarModel from "../car-model";
import "./index.scss";
import Radios from "../car-models-radios";
import { carModelChange } from "../../store/actions/order-info";

const mapStateToProps = (state) => ({
  selectedCar: state.order.selectedCar,
});

const mapDispatchToProps = (dispatch) => ({
  handleCarModelChange: (value) => {
    dispatch(carModelChange(value));
  },
});

function CarModels({ cars, handleCarModelChange, selectedCar }) {
  const [radioValue, setRadioValue] = useState("all");

  const carEls = cars
    .filter((car) => {
      if (radioValue === "all") {
        return car;
      }
      if (radioValue === "economy") {
        return car.type === "economy";
      }
      return car.type === "premium";
    })
    .map((car) => (
      <CarModel
        key={car.id}
        car={car}
        handleCarModelChange={handleCarModelChange}
        selectedCar={selectedCar}
        radioValue={radioValue}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(CarModels);
