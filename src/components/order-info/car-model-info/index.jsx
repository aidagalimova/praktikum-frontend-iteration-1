import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

function CarModelInfo() {
  const car = useSelector((state) => state.order.selectedCar);
  return (
    <>
      {car && (
        <div className="car-model-div">
          <h3 className="model-text light">Модель </h3>
          <>
            <div className="dots" />
            <h3 className="model-info-text light">{car.name}</h3>
          </>
        </div>
      )}
    </>
  );
}

export default CarModelInfo;
