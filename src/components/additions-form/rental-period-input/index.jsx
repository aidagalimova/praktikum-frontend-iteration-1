import React, { useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { ReactComponent as Cross } from "../../../assets/svg/input-cross.svg";
import "./index.scss";

function RentalPeriodInput({ handleDateChange }) {
  const [date, setDate] = useState({
    start: null,
    end: null,
  });

  function disabledStartDate(current) {
    return moment().add(-1, "days") >= current;
  }

  function disabledEndDate(current) {
    if (!date.start) {
      return moment().add(-1, "days") >= current;
    }
    return date.start >= current;
  }

  function toSetStartDate(value) {
    if (value >= date.end) {
      setDate({
        start: value.startOf("hour"),
        end: null,
      });
    } else {
      setDate({
        ...date,
        start: value.startOf("hour"),
      });
      if (date.end) {
        const duration = moment.duration(date.end.diff(value.startOf("hour")));
        handleDateChange(duration);
      }
    }
  }

  function toSetEndDate(value) {
    setDate({ ...date, end: value.startOf("hour") });
    if (date.start) {
      const duration = moment.duration(value.startOf("hour").diff(date.start));
      handleDateChange(duration);
    }
  }

  return (
    <div className="rental-period-div">
      <div className="date-picker-div">
        <div className="text-div">
          <h3 className="date-picker-text light">С</h3>
        </div>
        <DatePicker
          className="date-picker"
          showTime={{ format: "HH" }}
          format="DD.MM.YYYY HH:00"
          onOk={toSetStartDate}
          bordered={false}
          placeholder="Введите дату и время"
          locale={locale}
          suffixIcon={null}
          clearIcon={<Cross />}
          disabledDate={disabledStartDate}
          allowClear
        />
      </div>
      <div className="date-picker-div">
        <div className="text-div">
          <h3 className="date-picker-text light">По</h3>
        </div>
        <DatePicker
          className="date-picker"
          showTime={{ format: "HH" }}
          format="DD.MM.YYYY HH:00"
          onOk={toSetEndDate}
          bordered={false}
          placeholder="Введите дату и время"
          locale={locale}
          suffixIcon={null}
          clearIcon={<Cross />}
          disabledDate={disabledEndDate}
          value={date.end}
          allowClear
        />
      </div>
    </div>
  );
}

export default RentalPeriodInput;
