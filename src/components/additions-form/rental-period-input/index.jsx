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

  const clean = () => {
    setDate({ ...date, end: null });
  };

  const props = {
    className: "date-picker",
    showTime: { format: "HH" },
    format: "DD.MM.YYYY HH:00",
    bordered: false,
    placeholder: "Введите дату и время",
    locale: { locale },
    suffixIcon: null,
    allowClear: true,
  };
  return (
    <div className="rental-period-div">
      <div className="date-picker-div">
        <div className="text-div">
          <h3 className="date-picker-text light">С</h3>
        </div>
        <DatePicker
          onOk={toSetStartDate}
          clearIcon={<Cross />}
          disabledDate={disabledStartDate}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </div>
      <div className="date-picker-div">
        <div className="text-div">
          <h3 className="date-picker-text light">По</h3>
        </div>
        <DatePicker
          onOk={toSetEndDate}
          clearIcon={<Cross onClick={clean} />}
          disabledDate={disabledEndDate}
          value={date.end}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </div>
    </div>
  );
}

export default RentalPeriodInput;
