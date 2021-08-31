import React from "react";
import {Radio} from "antd";
import "./index.scss";

function TariffRadios({ handleRadioChange, radioValue }) {
    return (
      <div className="tariff-radios-div">
        <Radio.Group
          onChange={handleRadioChange}
          value={radioValue}
          defaultValue="Поминутно"
        >
          <Radio className="radio " value="Поминутно">
            <h3
              className={`radio-text ${radioValue === "minute" ? "black" : ""}`}
            >
              Поминутно, 7₽/мин
            </h3>
          </Radio>
          <Radio value="На сутки">
            <h3 className={`radio-text ${radioValue === "day" ? "black" : ""}`}>
              На сутки, 1999 ₽/сутки
            </h3>
          </Radio>
        </Radio.Group>
      </div>
    );
  }

  export default TariffRadios;