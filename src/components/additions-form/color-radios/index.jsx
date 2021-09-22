import React from "react";
import { Radio } from "antd";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { colorChange } from "../../../store/actions/order-info";

function ColorRadios() {
  const dispatch = useDispatch();
  const radioValue = useSelector((state) => state.order.color);
  const handleColorChange = (e) => {
    dispatch(colorChange(e.target.value));
  };
  return (
    <div className="color-radios-div">
      <Radio.Group
        onChange={handleColorChange}
        value={radioValue}
        defaultValue="Любой"
      >
        <Radio value="Любой">
          <h3 className={`radio-text ${radioValue === "all" ? "black" : ""}`}>
            Любой
          </h3>
        </Radio>
        <Radio value="Красный">
          <h3 className={`radio-text ${radioValue === "red" ? "black" : ""}`}>
            Красный
          </h3>
        </Radio>
        <Radio value="Голубой">
          <h3 className={`radio-text ${radioValue === "blue" ? "black" : ""}`}>
            Голубой
          </h3>
        </Radio>
      </Radio.Group>
    </div>
  );
}

export default ColorRadios;
