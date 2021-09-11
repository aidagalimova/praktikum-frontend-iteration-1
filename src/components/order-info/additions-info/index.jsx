import React, { useEffect } from "react";
import { connect } from "react-redux";
import { colorAndTariffSet } from "../../../store/actions/order-info";
import "./index.scss";

const mapDispatchToProps = (dispatch) => ({
  ColorTariffSet: () => {
    dispatch(colorAndTariffSet());
  },
});
function AdditionsInfo({ info, curStep, ColorTariffSet }) {
  useEffect(() => {
    if (!info.color && curStep === 2) {
      ColorTariffSet();
    }
  }, [curStep === 2]);
  return (
    <>
      <div className="additions-divs">
        {info.color && (
          <div className="addition-div">
            <h3 className="text color light">Цвет </h3>
            <div className="dots" />
            <h3 className="text light right">{info.color}</h3>
          </div>
        )}

        {(info.duration[0] || info.duration[1]) && (
          <div className="addition-div">
            <h3 className="text date light">Длительность аренды </h3>
            <div className="date-dots" />
            {(info.duration[0] && info.duration[1] && (
              <>
                <h3 className="text light days right">{info.duration[0]}д</h3>
                <h3 className="text light right">{info.duration[1]}ч</h3>
              </>
            )) ||
              (info.duration[0] && (
                <h3 className="text light right">{info.duration[0]}д</h3>
              )) ||
              (info.duration[1] && (
                <h3 className="text light right">{info.duration[1]}ч</h3>
              ))}
          </div>
        )}
        {info.tariff && (
          <div className="addition-div">
            <h3 className="text date light">Тариф </h3>
            <div className="dots" />
            <h3 className="text light right">{info.tariff}</h3>
          </div>
        )}
        {info.services && (
          <>
            {info.services.map((service) => (
              <div key={service} className="addition-div">
                <h3 className="text date light">{`${service}`} </h3>
                <div className="dots" />
                <h3 className="text light right">Да</h3>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default connect(null, mapDispatchToProps)(AdditionsInfo);
