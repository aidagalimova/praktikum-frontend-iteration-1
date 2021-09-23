import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio } from "antd";
import { tariffChange } from "../../../store/actions/order-info";
import "./index.scss";
import getTariffs from "../../../services/tariffs";

function TariffRadios() {
  const dispatch = useDispatch();
  const tariffs = useSelector((state) => state.tariffs);
  const radioValue = useSelector((state) => state.order.tariff);
  useEffect(() => {
    dispatch(getTariffs());
  }, []);

  const handleTariffChange = (e) => {
    dispatch(tariffChange(e.target.value));
  };

  function Tariff({ tariff }) {
    return (
      <Radio className="radio " value={tariff}>
        <h3 className="radio-text">
          {tariff.rateTypeId.name}, {tariff.price}₽/{tariff.rateTypeId.unit}
        </h3>
      </Radio>
    );
  }

  if (tariffs) {
    const Tariffs = tariffs.map((tariff) => (
      <Tariff key={tariff.id} tariff={tariff} />
    ));
    return (
      <div className="tariff-radios-div">
        <Radio.Group onChange={handleTariffChange} value={radioValue}>
          {Tariffs}
        </Radio.Group>
      </div>
    );
  }
  return <></>;
}
export default TariffRadios;
