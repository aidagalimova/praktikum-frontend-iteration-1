import React from "react";
import "./index.scss";

function AdditionsInfo({ info, curStep, isOrderPage }) {
  return (
    <>
      {(curStep >= 2 || isOrderPage) && (
        <div className="additions-divs">
          {info.color && (
            <div className="addition-div">
              <h3 className="text color light">Цвет </h3>
              <div className="dots" />
              <h3 className="text light right">{info.color}</h3>
            </div>
          )}
          {(info.date[0] || info.date[1]) && (
            <div className="addition-div">
              <h3 className="text date light">Длительность аренды </h3>
              <div className="date-dots" />
              {(info.date[0] && info.date[1] && (
                <>
                  <h3 className="text light days right">{info.date[0]}д</h3>
                  <h3 className="text light right">{info.date[1]}ч</h3>
                </>
              )) ||
                (info.date[0] && (
                  <h3 className="text light right">{info.date[0]}д</h3>
                )) ||
                (info.date[1] && (
                  <h3 className="text light right">{info.date[1]}ч</h3>
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
      )}
    </>
  );
}

export default AdditionsInfo;
