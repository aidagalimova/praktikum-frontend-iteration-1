import React, { useEffect } from "react";
import { Radio } from "antd";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { colorChange } from "../../../store/actions/order-info";

function ColorRadios() {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.order.selectedCar.colors);
  const radioValue = useSelector((state) => state.order.color);

  useEffect(() => {
    if (!radioValue) dispatch(colorChange(colors[0]));
  }, []);
  const handleColorChange = (e) => {
    dispatch(colorChange(e.target.value));
  };

  function Color({ color }) {
    return (
      <Radio value={color}>
        <h3 className={`radio-text `}>{color}</h3>
      </Radio>
    );
  }

  if (colors) {
    const Colors = colors.map((color) => <Color key={color} color={color} />);
    return (
      <div className="color-radios-div">
        <Radio.Group onChange={handleColorChange} value={radioValue}>
          {Colors}
        </Radio.Group>
      </div>
    );
  }
}

export default ColorRadios;
