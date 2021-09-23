import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { DatePicker } from "antd";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { ReactComponent as Cross } from "../../../assets/svg/input-cross.svg";
import {
  dateChange,
  dateDuartionChange,
} from "../../../store/actions/order-info";
import "./index.scss";

function RentalPeriodInput() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.order.date);

  const handleDateChange = (start, end) => {
    dispatch(dateChange(start, end));
  };

  const handleDurationChange = (dateDuration) => {
    const duration = [];
    if (dateDuration) {
      if (dateDuration.asHours() >= 24) {
        duration[0] = Math.floor(dateDuration.asDays());
        if (dateDuration.asHours() % 24 !== 0) {
          duration[1] = dateDuration.asHours() % 24;
        }
      } else {
        duration[1] = dateDuration.asHours() % 24;
      }
    }
    if (duration[0] > 0 || duration[1] > 0)
      dispatch(dateDuartionChange(duration));
  };

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
      handleDateChange(value.startOf("hour"), null);
    } else {
      handleDateChange(value.startOf("hour"), date.end);
      if (date.end) {
        const duration = moment.duration(date.end.diff(value.startOf("hour")));
        handleDurationChange(duration);
      }
    }
  }

  function toSetEndDate(value) {
    handleDateChange(date.start, value.startOf("hour"));
    if (date.start) {
      const duration = moment.duration(value.startOf("hour").diff(date.start));
      handleDurationChange(duration);
    }
  }

  const cleanEnd = () => {
    handleDateChange(date.start, null);
    handleDurationChange();
  };

  const cleanStart = () => {
    handleDateChange(null, date.end);
    handleDurationChange();
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
          clearIcon={<Cross onClick={cleanStart} />}
          disabledDate={disabledStartDate}
          value={date.start}
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
          clearIcon={<Cross onClick={cleanEnd} />}
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
