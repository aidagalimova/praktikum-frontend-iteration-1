import React from "react";
import ColorRadios from "./color-radios";
import RentalPeriodInput from "./rental-period-input";
import TariffRadios from "./tariff-radios";
import ServicesCheckboxes from "./services-checkboxes";
import "./index.scss";

function AdditionsForm() {
  return (
    <div className="additions-div">
      <h3 className="title light">Цвет</h3>
      <ColorRadios />

      <h3 className="title light">Дата аренды</h3>
      <RentalPeriodInput />

      <h3 className="title light">Тариф</h3>
      <TariffRadios />

      <h3 className="title light">Доп услуги</h3>
      <ServicesCheckboxes />
    </div>
  );
}

export default AdditionsForm;
