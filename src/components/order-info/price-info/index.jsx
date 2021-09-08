import React from "react";
import "./index.scss";

function PriceInfo({ info }) {
    return (
      <div className="price-div">
        <div>
          <h3 className="price-text medium">Цена:&nbsp;</h3>
        </div>
        <div className="price-dots " />
        <div>
          <h3 className="price regular">
            {info.point ? "8 000 ₽" : "0 ₽"}
          </h3>
        </div>
      </div>
    );
  }

  export default PriceInfo;