import React  from "react";
import moment from "moment";
import { DatePicker } from "antd";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { ReactComponent as Cross } from "../../../assets/svg/input-cross.svg";
import "./index.scss";

function RentalPeriodInput() {

  function disabledStartDate(current) {
    return moment().add(-1, "days") >= current;
  }
  function disabledEndDate(current) {
    return moment().add(-1, "days") >= current;
  }

  function onOk(value) {
    console.log(value);
  }

  return (
    <div className="rental-period-div">
      <DatePicker
        className="date-picker"
        showTime={{ format: "HH" }}
        format="DD.MM.YYYY HH:00"
        onOk={onOk}
        bordered={false}
        placeholder="Введите дату и время"
        locale={locale}
        suffixIcon={null}
        clearIcon={<Cross />}
        disabledDate={disabledStartDate}
        disabledTime={disabledStartDate}
      />
      <DatePicker
        className="date-picker"
        showTime={{ format: "HH" }}
        format="DD.MM.YYYY HH:00"
        onOk={onOk}
        bordered={false}
        placeholder="Введите дату и время"
        locale={locale}
        suffixIcon={null}
        clearIcon={<Cross />}
        disabledDate={disabledEndDate}
      />
    </div>
  );
}

export default RentalPeriodInput;
