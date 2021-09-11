import React from "react";
import { connect } from "react-redux";
import LocationInfo from "./location-info";
import CarModelInfo from "./car-model-info";
import AdditionsInfo from "./additions-info";
import PriceInfo from "./price-info";
import "./index.scss";
import NextButton from "./next-button";

const mapStateToProps = (state) => ({
  info: state.order,
  curStep: state.step,
});

function OrderInfo({ info, onStepChange, curStep, isOrderPage }) {
  return (
    <div className="info-div">
      <h2 className="title medium">Ваш заказ:</h2>
      <LocationInfo info={info} />
      <CarModelInfo info={info} curStep={curStep} isOrderPage={isOrderPage} />
      <AdditionsInfo info={info} curStep={curStep} isOrderPage={isOrderPage} />
      <PriceInfo info={info} />
      {curStep === 0 && (
        <NextButton
          btnText="Выбрать модель"
          info={info.point}
          onStepChange={() => {
            onStepChange(1);
          }}
        />
      )}
      {curStep === 1 && (
        <NextButton
          btnText="Дополнительно"
          info={info.selectedCar}
          onStepChange={() => {
            onStepChange(2);
          }}
        />
      )}
      {curStep === 2 && (
        <NextButton
          btnText="Итого"
          info={info.duration.length !== 0}
          onStepChange={() => {
            onStepChange(3);
          }}
        />
      )}
      {(curStep === 3 || curStep === 4) && (
        <>
          <NextButton
            btnText="Заказать"
            info={info.point}
            onStepChange={() => {
              onStepChange(4);
            }}
          />
        </>
      )}
    </div>
  );
}
export default connect(mapStateToProps)(OrderInfo);
