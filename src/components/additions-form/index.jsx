import React from "react";
import { connect } from "react-redux";
import {
  colorChange,
  tariffChange,
  servicesChange
} from "../../store/actions/order-info";
import ColorRadios from "./color-radios";
import RentalPeriodInput from "./rental-period-input";
import TariffRadios from "./tariff-radios";
import ServicesCheckboxes from "./services-checkboxes";
import "./index.scss";

const mapStateToProps = (state) => ({
  color: state.order.color,
  tariff: state.order.tariff,
});

const mapDispatchToProps = (dispatch) => ({
  handleColorChange: (e) => {
    dispatch(colorChange(e.target.value));
  },
  handleTariffChange: (e) => {
    dispatch(tariffChange(e.target.value));
  },
  handleServicesChange: (value) => {
    dispatch(servicesChange(value));
  },
});

function AdditionsForm({
  handleColorChange,
  handleDurationChange,
  handleTariffChange,
  handleServicesChange,
  color,
  tariff,
}) {
  return (
    <div className="additions-div">
      <h3 className="title light">Цвет</h3>
      <ColorRadios handleRadioChange={handleColorChange} radioValue={color} />

      <h3 className="title light">Дата аренды</h3>
      <RentalPeriodInput handleDurationChange={handleDurationChange} />

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

export default connect(mapStateToProps, mapDispatchToProps)(AdditionsForm);
