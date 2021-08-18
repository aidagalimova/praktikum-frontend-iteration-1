import React from "react";
import { ReactComponent as MapIcon } from "./svg/map.svg";
import "./index.scss";

function MainPageHeader() {
  return (
    <div className="header-div">
      <h1 className="header-name">Need for drive</h1>
      <div className="city-div">
        <MapIcon className="map-icon" />
        <h3 className="city">Ульяновск</h3>
      </div>
    </div>
  );
}

export default MainPageHeader;
