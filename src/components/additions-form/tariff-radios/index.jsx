import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio } from "antd";
import { tariffChange } from "../../../store/actions/order-info";
import "./index.scss";

function TariffRadios() {
  const dispatch = useDispatch();
  const radioValue = useSelector((state) => state.order.tariff);

  const handleTariffChange = (e) => {
    dispatch(tariffChange(e.target.value));
  };
  return (
    <div className="tariff-radios-div">
      <Radio.Group
        onChange={handleTariffChange}
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
