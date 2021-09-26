import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

function PriceInfo() {
  const { priceMin, priceMax, totalPrice } = useSelector(
    (state) => state.order
  );

  return (
    <div className="price-div">
      <div>
        <h3 className="price-text medium">Цена:&nbsp;</h3>
      </div>
      <div className="price-dots " />
      <div>
        {(totalPrice !== 0 && (
          <h3 className="price regular">{totalPrice} ₽</h3>
        )) ||
          (priceMin && (
            <h3 className="price regular">
              {priceMin} - {priceMax} ₽
            </h3>
          )) || <h3 className="price regular">0 ₽</h3>}
      </div>
    </div>
  );
}

export default PriceInfo;
