import React from "react";
import { Checkbox } from "antd";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { servicesChange } from "../../../store/actions/order-info";

function ServicesCheckboxes() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.order.services);
  const handleServicesChange = (value) => {
    dispatch(servicesChange(value));
  };
  const options = [
    { label: "Полный бак, 500р", value: "Полный бак, 500р" },
    { label: "Детское кресло, 200р", value: "Детское кресло, 200р" },
    { label: "Правый руль, 1600р", value: "Правый руль, 1600р" },
  ];
  return (
    <Checkbox.Group
      options={options}
      onChange={handleServicesChange}
      className="light"
      value={services}
    />
  );
}

export default ServicesCheckboxes;
