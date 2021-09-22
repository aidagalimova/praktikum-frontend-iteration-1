import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

function PriceInfo() {
  const { priceMin, priceMax } = useSelector((state) => state.order);

  return (
    <div className="price-div">
      <div>
        <h3 className="price-text medium">Цена:&nbsp;</h3>
      </div>
      <div className="price-dots " />
      <div>
        <h3 className="price regular">
          {priceMin ? `${priceMin} - ${priceMax} ₽` : "0 ₽"}
        </h3>
      </div>
    </div>
  );
}

export default PriceInfo;
