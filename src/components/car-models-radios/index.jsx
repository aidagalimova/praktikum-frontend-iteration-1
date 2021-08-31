import React from "react";
import { Radio } from "antd";
import "./index.scss";

function Radios({ handleRadioChange, radioValue }) {
  return (
    <div className="radios-div">
      <Radio.Group
        onChange={handleRadioChange}
        value={radioValue}
        defaultValue="all"
      >
        <Radio value="all">
          <h3 className="radio-text light">Все модели</h3>
        </Radio>
        <Radio value="economy">
          <h3 className="radio-text light">Эконом</h3>
        </Radio>
        <Radio value="premium">
          <h3 className="radio-text light">Премиум</h3>
        </Radio>
      </Radio.Group>
    </div>
  );
}

export default Radios;
