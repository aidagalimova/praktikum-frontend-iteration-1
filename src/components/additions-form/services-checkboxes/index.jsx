import React from "react";
import {Checkbox} from "antd";
import "./index.scss";

function ServicesCheckboxes({ handleCheckboxChange }) {
    const options = [
      { label: "Полный бак, 500р", value: "Полный бак" },
      { label: "Детское кресло, 200р", value: "Детское кресло" },
      { label: "Правый руль, 1600р", value: "Правый руль" },
    ];
    return (
      <Checkbox.Group
        options={options}
        onChange={handleCheckboxChange}
        className="light"
      />
    );
  }
  
  export default ServicesCheckboxes;