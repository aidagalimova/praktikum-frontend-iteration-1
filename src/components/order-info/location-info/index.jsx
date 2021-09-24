import React from "react";
import "./index.scss";

function LocationInfo({ info }) {
  return (
    <div className="location-divs">
      <div className="point-div">
        <h3 className="point-text light">Пункт выдачи </h3>
      </div>
      {info.point && (
        <>
          <div className="dots" />
          <div className="location-div">
            <h3 className="location-text light">
              {JSON.parse(info.city).name},
            </h3>
            <h3 className="location-text light">
              {JSON.parse(info.point).name}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default LocationInfo;
