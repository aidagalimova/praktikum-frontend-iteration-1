import React from "react";
import "./index.scss";

function CarModelInfo({ info }) {
  return (
    <>
      {info.selectedCar && (
        <div className="car-model-div">
          <h3 className="model-text light">Модель </h3>
          <>
            <div className="dots" />
            <h3 className="model-info-text light">{`${info.selectedCar.company}, ${info.selectedCar.model}`}</h3>
          </>
        </div>
      )}
    </>
  );
}

export default CarModelInfo;
