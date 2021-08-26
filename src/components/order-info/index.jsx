import React from "react";
import { Button } from "antd";
import "./index.scss";

function OrderInfo({ info }) {
  return (
    <div className="info-div">
      <h2 className="title medium">Ваш заказ:</h2>
      <div className="location-divs">
        <div className="point-div">
          <h3 className="point-text light">Пункт выдачи </h3>
        </div>
        {info.point ? (
          <>
            <div className="dots" />
            <div className="location-div">
              <h3 className="location-text light">{info.city}</h3>
              <h3 className="location-text light">{info.point}</h3>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="price-div">
        <div>
          <h3 className="price-text medium">Цена:&nbsp;</h3>
        </div>
        <div className="price-dots " />
        <div>
          <h3 className="price regular">
            {info.point ? "от 8 000 до 12 000 ₽" : "0 ₽"}
          </h3>
        </div>
      </div>
      <Button className={`btn ${info.point ? "" : "btn-disabled"}`}>
        <h3 className="btn-text medium">Выбрать модель</h3>
      </Button>
    </div>
  );
}
export default OrderInfo;
