/* eslint-disable no-unused-vars */
import React from "react";
import ColorRadios from "./color-radios";
import RentalPeriodInput from "./rental-period-input";
import TariffRadios from "./tariff-radios";
import ServicesCheckboxes from "./services-checkboxes";
import "./index.scss";

function AdditionsForm({
  handleColorChange,
  handleDateChange,
  handleTariffChange,
  handleServicesChange,
  color,
  tariff,
  services,
  date,
}) {

  return (
    <div className="additions-div">
      <h3 className="title light">Цвет</h3>
      <ColorRadios handleRadioChange={handleColorChange} radioValue={color} />

      <h3 className="title light">Дата аренды</h3>
      <RentalPeriodInput />

      <h3 className="title light">Тариф</h3>
      <TariffRadios
        handleRadioChange={handleTariffChange}
        radioValue={tariff}
      />

      <h3 className="title light">Доп услуги</h3>
      <ServicesCheckboxes handleCheckboxChange={handleServicesChange} />
    </div>
  );
}

export default AdditionsForm;
