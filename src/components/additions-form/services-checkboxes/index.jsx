import React from "react";
import { Checkbox } from "antd";
import "./index.scss";
import { useDispatch } from "react-redux";
import { servicesChange } from "../../../store/actions/order-info";

function ServicesCheckboxes() {
  const dispatch = useDispatch();
  const handleServicesChange = (value) => {
    dispatch(servicesChange(value));
  };
  const options = [
    { label: "Полный бак, 500р", value: "Полный бак" },
    { label: "Детское кресло, 200р", value: "Детское кресло" },
    { label: "Правый руль, 1600р", value: "Правый руль" },
  ];
  return (
    <Checkbox.Group
      options={options}
      onChange={handleServicesChange}
      className="light"
    />
  );
}

export default ServicesCheckboxes;
